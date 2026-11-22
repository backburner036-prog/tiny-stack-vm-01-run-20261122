import{readFileSync as F,writeFileSync as W,readdirSync as L,mkdirSync as G}from"fs";
const T=Int32Array,U="0Aq46:;?        999999959995999 999             PTTP0           58              4414";
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
L(I).forEach(d=>{
let e="/"+d+"/",f=I+e,o=O+e,p=F(f+"program.bin"),i=F(f+"input.bin"),D=new T(256),s=0,C=[],c=0,M=new T(256),v=Buffer.alloc(65536),l=0,q=0,x=0,t=0,A,B,g,y,n=p.length;
G(o,{recursive:!0});
try{for(;;){
if(++t>1e6|x<0|x>=n)throw 9+(t>1e6);
let b=p[x],k=U.charCodeAt(b)-48;
if(k<0|k!=k)throw 5;
let m=k>>4,u=k>>2&3,w=k&3;
if((y=x+1+m)>n|s<u|s-u+w>256)throw y>n?9:s<u?2:3;
x=y;
if(b<8){
if(b<3){if(!b)throw 0;D[s++]=b<2?p[y-1]<<24>>24:p.readInt32LE(y-4)}
else if(b<4)s--;
else if(b%2==0)D[s]=D[s-1-(b>5)],s++;
else if(b<6)[D[s-1],D[s-2]]=[D[s-2],D[s-1]];
else{A=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=A}
}else if(b<35){
A=D[s-2];B=D[s-1];let z=b==23||b==27,P=A>>>0,Q=B>>>0,H=B&31;A=z?B:A;if(b>18&&b<23&&!B)throw 4;D[s-2+z]=[A+B,A-B,Math.imul(A,B),A/B|0,A%B|0,P/Q|0,P%Q|0,-B,A&B,A|B,A^B,~B,A<<H,A>>H,A>>>H|0,0,+(A==B),+(A<B),P<Q|0][b-16];s-=!z
}else if(b<54){
if(b<51){g=p.readInt16LE(y-2);if(b==48)x+=g;else{A=D[--s];if(b-49?A:A==0)x+=g}}
else if(b<52){if(c==64)throw 7;C[c++]=y;x=p[y-2]|p[y-1]<<8}
else{if(!c)throw 8;x=C[--c]}
}else if(b<66){
A=D[s-1];if(!(A in M))throw 6;b<65?D[s-1]=M[A]:(M[A]=D[s-2],s-=2)
}else{
if(b<81){g=D[s-1]+"";if(l+g.length>65536)throw 11;s--;l+=v.write(g,l)}
else if(b<82){if(l>>16)throw 11;v[l++]=D[--s]}
else if(b<83)D[s++]=i[q++]??-1;
else throw D[--s]&255;
}
}}catch(e){W(o+"stdout.bin",v.slice(0,l));W(o+"exit.txt",e+"")}
});
