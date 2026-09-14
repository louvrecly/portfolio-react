import sys
sys.path.insert(0,'/home/louvre/.claude/jobs/06f038d8/tmp')
exec(open('/home/louvre/.claude/jobs/06f038d8/tmp/contrast.py').read().split('PEAK=0.55')[0])
PEAK=0.55

C={
 'REF':{'surface':(0,0,15),'raised':(240,6,4),'ra':0.5,'onr':(0,0,100),'on':(0,0,100),
        'hi':(160,90,48),'hov':(160,90,66),
        'blobs':[(160,80,60),(250,80,60),(60,80,60),(350,80,60)]},
 'A':  {'surface':(230,14,14),'raised':(240,6,4),'ra':0.5,'onr':(0,0,100),'on':(0,0,100),
        'hi':(160,90,48),'hov':(160,90,66),
        'blobs':[(160,80,60),(250,80,60),(60,80,60),(350,80,60)]},
 'B':  {'surface':(230,16,13),'raised':(235,12,5),'ra':0.5,'onr':(0,0,100),'on':(0,0,100),
        'hi':(160,90,48),'hov':(160,90,66),
        'blobs':[(190,45,52),(255,48,56),(45,45,54),(340,42,54)]},
 'C':  {'surface':(240,6,7),'raised':(0,0,100),'ra':0.07,'onr':(0,0,100),'on':(0,0,100),
        'hi':(160,90,48),'hov':(160,90,66),
        'blobs':[(190,60,55),(255,62,58),(45,58,56),(340,55,56)]},
}

def backdrops(p):
    s=hsl(*p['surface'])
    out=[('bare',s)]
    for i,b in enumerate(p['blobs']):
        out.append((f'blob{i}',over(hsl(*b),PEAK,s)))
    return out

def worst_on_surface(p,fg):
    return min(ratio(hsl(*fg),bd) for _,bd in backdrops(p))

def worst_on_raised(p,fg):
    r=hsl(*p['raised'])
    return min(ratio(hsl(*fg),over(r,p['ra'],bd)) for _,bd in backdrops(p))

def bar(v,limit): return 'ok ' if v>=limit else 'LOW'

print(f"{'':>4} {'body/surf':>10} {'text/raised':>12} {'accent/raised':>14} {'hover/raised':>13} {'accent/surf':>12}")
for k,p in C.items():
    b  = worst_on_surface(p,p['on'])
    tr = worst_on_raised(p,p['onr'])
    ar = worst_on_raised(p,p['hi'])
    hr = worst_on_raised(p,p['hov'])
    asf= worst_on_surface(p,p['hi'])
    print(f"{k:>4} {b:>9.2f}{bar(b,3.0)} {tr:>11.2f}{bar(tr,4.5)} {ar:>13.2f}{bar(ar,3.0)} {hr:>12.2f}{bar(hr,3.0)} {asf:>11.2f}")

print("\n--- isolating the levers on REF ---")
import copy
def variant(base,**kw):
    p=copy.deepcopy(C[base]); p.update(kw); return p
tests={
 'REF (both loud)':          C['REF'],
 'ground tinted only':        variant('REF',surface=(230,16,13)),
 'gradient calmed only':      variant('REF',blobs=[(190,45,52),(255,48,56),(45,45,54),(340,42,54)]),
 'both (= B)':                C['B'],
}
for n,p in tests.items():
    print(f"{n:<24} body/surf {worst_on_surface(p,p['on']):.2f}   accent/raised {worst_on_raised(p,p['hi']):.2f}")

print("\n--- retuning C: hero-unified ground needs a calmer gradient too ---")
for sat,lt in [(60,55),(50,50),(45,46),(40,42),(45,40)]:
    p=variant('C',blobs=[(190,sat,lt),(255,sat+2,lt+3),(45,sat-2,lt+1),(340,sat-5,lt+1)])
    print(f"blob sat {sat:>3}% light {lt:>3}%  body {worst_on_surface(p,p['on']):.2f}  "
          f"text/raised {worst_on_raised(p,p['onr']):.2f}  accent/raised {worst_on_raised(p,p['hi']):.2f}  "
          f"hover/raised {worst_on_raised(p,p['hov']):.2f}")

print("\n--- C: raised lift alpha sweep at blob sat45/l46 ---")
for a in [0.05,0.07,0.10,0.14,0.18]:
    p=variant('C',ra=a,blobs=[(190,45,46),(255,47,49),(45,43,47),(340,40,47)])
    print(f"alpha {a:<5} text/raised {worst_on_raised(p,p['onr']):.2f}  accent/raised {worst_on_raised(p,p['hi']):.2f}")

print("\n--- C viability grid: accent/raised must clear 4.5 (nav+contact links are body-sized) ---")
print(f"{'sat/light':>10}", "".join(f"{a:>8}" for a in [0.04,0.06,0.08,0.10]))
for sat,lt in [(45,46),(40,42),(38,38),(35,34),(30,30)]:
    row=[]
    for a in [0.04,0.06,0.08,0.10]:
        p=variant('C',ra=a,blobs=[(190,sat,lt),(255,sat+2,lt+3),(45,sat-2,lt+1),(340,sat-5,lt+1)])
        row.append(worst_on_raised(p,p['hi']))
    print(f"{str(sat)+'/'+str(lt):>10}", "".join(f"{v:>8.2f}" for v in row))
