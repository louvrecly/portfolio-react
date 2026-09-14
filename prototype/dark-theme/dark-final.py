exec(open('/home/louvre/.claude/jobs/06f038d8/tmp/contrast.py').read().split('PEAK=0.55')[0])
PEAK=0.55
HERO=(240,6,4)
C={
 'REF':{'surface':(0,0,15),'raised':(240,6,4),'ra':0.5,'lift':False,
        'blobs':[(160,80,60),(250,80,60),(60,80,60),(350,80,60)]},
 'A':  {'surface':(230,14,14),'raised':(240,6,4),'ra':0.5,'lift':False,
        'blobs':[(160,80,60),(250,80,60),(60,80,60),(350,80,60)]},
 'B':  {'surface':(230,16,13),'raised':(235,12,5),'ra':0.5,'lift':False,
        'blobs':[(190,45,52),(255,48,56),(45,45,54),(340,42,54)]},
 'C':  {'surface':(240,6,7),'raised':(0,0,100),'ra':0.06,'lift':True,
        'blobs':[(190,38,38),(255,40,41),(45,36,39),(340,33,39)]},
}
ON=(0,0,100); HI=(160,90,48); HOV=(160,90,66)
def bds(p):
    s=hsl(*p['surface']); return [s]+[over(hsl(*b),PEAK,s) for b in p['blobs']]
def wsurf(p,fg): return min(ratio(hsl(*fg),bd) for bd in bds(p))
def wrais(p,fg):
    r=hsl(*p['raised']); return min(ratio(hsl(*fg),over(r,p['ra'],bd)) for bd in bds(p))
print(f"{'':>4} {'body/surf':>10} {'text/rais':>10} {'link/rais':>10} {'hover/rais':>11} {'link/surf':>10} {'hero seam':>10}")
for k,p in C.items():
    seam=ratio(hsl(*p['surface']),hsl(*HERO))
    print(f"{k:>4} {wsurf(p,ON):>10.2f} {wrais(p,ON):>10.2f} {wrais(p,HI):>10.2f} "
          f"{wrais(p,HOV):>11.2f} {wsurf(p,HI):>10.2f} {seam:>10.2f}")
print("\nbars: body/surf >=3 (large text only), text|link|hover on raised >=4.5, link/surf is the known no-go")
print("hero seam = page surface vs hero ground 240 6% 4%; 1.00 = seamless")
