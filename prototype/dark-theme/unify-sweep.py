exec(open('contrast.py').read().split('PEAK=0.55')[0])
PEAK=0.55
BLOBS=[(160,80,60),(250,80,60),(60,80,60),(350,80,60)]   # unchanged gradient
ON=(0,0,100); HI=(160,90,48); HOV=(160,90,66); HERO=(240,6,4)
def bds(s): s=hsl(*s); return [s]+[over(hsl(*b),PEAK,s) for b in BLOBS]
def m(surface, raised, a):
    B=bds(surface); r=hsl(*raised)
    body=min(ratio(hsl(*ON),x) for x in B)
    rs=[over(r,a,x) for x in B]
    txt=min(ratio(hsl(*ON),x) for x in rs)
    lnk=min(ratio(hsl(*HI),x) for x in rs)
    hov=min(ratio(hsl(*HOV),x) for x in rs)
    asf=min(ratio(hsl(*HI),x) for x in B)
    seam=ratio(hsl(*surface),hsl(*HERO))
    return body,txt,lnk,hov,asf,seam
hdr=f"{'surface':>12} {'raised':>18} {'body':>6} {'text':>6} {'link':>6} {'hover':>6} {'acc/s':>6} {'seam':>5}"
def row(s,r,a,tag=''):
    v=m(s,r,a); print(f"{str(s):>12} {str(r)+'/'+str(a):>18} "+" ".join(f"{x:>6.2f}" for x in v)+f"  {tag}")
print("REF for comparison"); print(hdr); row((0,0,15),(240,6,4),0.5,'today')
print("\n1) ground lowered toward hero, raised kept as today's darkening /0.5"); print(hdr)
for L in [13,11,9,7,5,4]: row((240,6,L),(240,6,4),0.5)
print("\n2) unified ground 240 6% 4%, raised = darkening at various alpha"); print(hdr)
for a in [0.4,0.5,0.6,0.7]: row((240,6,4),(240,6,2),a)
print("\n3) unified ground, raised = white lift (as hero does)"); print(hdr)
for a in [0.04,0.06,0.10]: row((240,6,4),(0,0,100),a)

print("\n4) ceiling: how far can the ground alone push body text with this gradient?"); print(hdr)
for s in [(240,6,4),(240,6,2),(0,0,0)]: row(s,(240,6,2),0.5)
print("\nwhich blob binds body/surf at 240 6% 4%:")
for b in BLOBS: print(b, round(ratio(hsl(*ON),over(hsl(*b),PEAK,hsl(240,6,4))),2))
