import{readFileSync as F,writeFileSync as W,readdirSync as L,mkdirSync as G}from"node:fs";
const U="01146:;?@@@@@@@@999999959995999@999@@@@@@@@@@@@@04400@@@@@@@@@@@58@@@@@@@@@@@@@@4414";
function run(p,i){
let D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,Y=new Int32Array(256),o=new Uint8Array(65536),l=0,q=0,x=0,t=0,A,B,r,g;
const E=k=>({o:o.slice(0,l),c:k});
for(;;){
if(t==1e6)return E(10);
if(x<0||x>=p.length)return E(9);
let b=p[x],k=U.charCodeAt(b)-48;
if(!(k<16))return E(5);
let m=b==1?1:b==2?4:b>47&&b<52?2:0;
if(x+m>=p.length)return E(9);
t++;let y=x+1+m,u=k>>2,w=k&3;
if(s<u||s-u+w>256)return E(s<u?2:3);
x=y;
if(b>15&&b<35&&b!=23&&b!=27&&b!=31){
A=D[s-2];B=D[s-1];
if(b>18&&b<23&&B==0)return E(4);
r=b==16?A+B|0:b==17?A-B|0:b==18?Math.imul(A,B):b==19?A==-2147483648&&B==-1?A:A/B|0:b==20?B==-1?0:A%B|0:b==21?(A>>>0)/(B>>>0)|0:b==22?(A>>>0)%(B>>>0)|0:b==24?A&B:b==25?A|B:b==26?A^B:b==28?A<<B:b==29?A>>B:b==30?(A>>>B)|0:b==32?A==B?1:0:b==33?A<B?1:0:(A>>>0)<(B>>>0)?1:0;
s-=2;D[s++]=r;
}else switch(b){
case 0:return E(0);
case 1:D[s++]=(p[y-1]<<24)>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:g=D[s-1];D[s-1]=D[s-2];D[s-2]=g;break;
case 6:D[s]=D[s-2];s++;break;
case 7:g=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=g;break;
case 23:case 27:D[s-1]=b==23?-D[s-1]|0:~D[s-1];break;
case 48:case 49:case 50:
g=(p[y-2]|p[y-1]<<8)<<16>>16;
if(b==48)x=y+g;
else{A=D[--s];if((b==49)===(A==0))x=y+g;}
break;
case 51:if(c==64)return E(7);C[c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(c==0)return E(8);x=C[--c];break;
case 64:A=D[s-1];if(A<0|A>255)return E(6);D[s-1]=Y[A];break;
case 65:A=D[s-1];g=D[s-2];if(A<0|A>255)return E(6);s-=2;Y[A]=g;break;
case 80:g=String(D[s-1]);if(l+g.length>65536)return E(11);s--;for(const h of g)o[l++]=h.charCodeAt(0);break;
case 81:if(l>65535)return E(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=q<i.length?i[q++]:-1;break;
case 83:return E(D[--s]&255);
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(const d of L(I).sort()){let a=run(F(I+"/"+d+"/program.bin"),F(I+"/"+d+"/input.bin"));G(O+"/"+d,{recursive:true});W(O+"/"+d+"/stdout.bin",a.o);W(O+"/"+d+"/exit.txt",a.c+"\n")}
