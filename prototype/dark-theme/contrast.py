def hsl(h,s,l):
    h=h/360.0; s=s/100.0; l=l/100.0
    if s==0: r=g=b=l
    else:
        def hue(p,q,t):
            t=t%1
            if t<1/6: return p+(q-p)*6*t
            if t<1/2: return q
            if t<2/3: return p+(q-p)*(2/3-t)*6
            return p
        q = l*(1+s) if l<0.5 else l+s-l*s
        p = 2*l-q
        r=hue(p,q,h+1/3); g=hue(p,q,h); b=hue(p,q,h-1/3)
    return (r*255,g*255,b*255)

def over(fg,a,bg): return tuple(fg[i]*a+bg[i]*(1-a) for i in range(3))
def lum(c):
    def f(v):
        v=v/255
        return v/12.92 if v<=0.03928 else ((v+0.055)/1.055)**2.4
    r,g,b=[f(x) for x in c]
    return 0.2126*r+0.7152*g+0.0722*b
def ratio(a,b):
    la,lb=lum(a),lum(b)
    hi,lo=max(la,lb),min(la,lb)
    return (hi+0.05)/(lo+0.05)

PEAK=0.55
THEMES={
 'dark':{'surface':hsl(0,0,15),'blobs':[hsl(160,80,60),hsl(250,80,60),hsl(60,80,60),hsl(350,80,60)],
         'raised_rgb':hsl(240,6,4),'text':hsl(0,0,100),'accent':hsl(160,90,48)},
 'light':{'surface':hsl(230,32,96),'blobs':[hsl(190,45,76),hsl(255,48,80),hsl(45,45,81),hsl(340,42,81)],
          'raised_rgb':hsl(0,0,100),'text':hsl(230,26,14),'accent':hsl(160,95,21)},
}

for name,t in THEMES.items():
    backdrops=[('surface',t['surface'])]
    for i,b in enumerate(t['blobs']):
        backdrops.append((f'blob{i}',over(b,PEAK,t['surface'])))
    print(f"\n=== {name} : drawer = raised colour at alpha A over the page ===")
    print(f"{'A':>5} {'worst text':>11} {'worst accent':>13}")
    for A in [0.5,0.58,0.7,0.8,0.85,0.9,0.92,0.95,1.0]:
        wt=min(ratio(t['text'],over(t['raised_rgb'],A,bd)) for _,bd in backdrops)
        wa=min(ratio(t['accent'],over(t['raised_rgb'],A,bd)) for _,bd in backdrops)
        flag=''
        if wt<4.5 or wa<4.5: flag=' <- fails AA body'
        print(f"{A:>5} {wt:>11.2f} {wa:>13.2f}{flag}")
