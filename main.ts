import{readFileSync as F,writeFileSync as W,readdirSync as L,mkdirSync as G}from"fs";
const T=Int32Array,U="0Aa46:;?pppppppp999999959995999p999pppppppppppppPTTP0ppppppppppp58pppppppppppppp4414";
function run(p,i){
let D=new T(256),s=0,C=new T(64),c=0,Y=new T(256),o=Buffer.alloc(65536),l=0,q=0,x=0,t=0,A,B,g,n=p.length,P,Q;
const E=k=>[o.slice(0,l),k];
for(;;){
if(++t>1e6)return E(10);
if(x>>>0>=n)return E(9);
let b=p[x],k=U.charCodeAt(b)-48;
if(!(k<64))return E(5);
let m=[0,1,2,4][k>>4];
if(x+m>=n)return E(9);
let y=x+1+m,u=k>>2&3,w=k&3;
if(s<u|s-u+w>256)return E(s<u?2:3);
x=y;
if(k==9){
A=D[s-2],B=D[s-1],P=A>>>0,Q=B>>>0;
if(b>18&b<23&B==0)return E(4);
D[s-2]=[A+B,A-B,Math.imul(A,B),A/B,A%B,P/Q,P%Q,0,A&B,A|B,A^B,0,A<<B,A>>B,A>>>B,0,A==B|0,A<B|0,P<Q|0][b-16];
s--;
}switch(b){
case 0:return E(0);
case 1:case 2:D[s++]=b==1?p.readInt8(y-1):p.readInt32LE(y-4);break;
case 3:s--;break;
case 4:case 6:D[s]=D[s-1-(b==6)];s++;break;
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 23:case 27:D[s-1]=-D[s-1]-(b==27);break;
case 48:case 49:case 50:
g=p.readInt16LE(y-2);
A=b<49?0:D[--s];if(b<49|(b==49)===(A==0))x=y+g;
break;
case 51:if(c==64)return E(7);C[c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(c==0)return E(8);x=C[--c];break;
case 64:case 65:A=D[s-1];if(!(A in Y))return E(6);if(b==64)D[s-1]=Y[A];else Y[A]=D[s-2],s-=2;break;
case 80:g=D[s-1]+"";if(l+g.length>65536)return E(11);s--;l+=o.write(g,l);break;
case 81:if(l>>16)return E(11);o[l++]=D[--s];break;
case 82:D[s++]=i[q++]??-1;break;
case 83:return E(D[--s]&255);
}
}
}
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
for(const d of L(I)){let[o,c]=run(F(I+"/"+d+"/program.bin"),F(I+"/"+d+"/input.bin"));G(O+"/"+d,{recursive:!0});W(O+"/"+d+"/stdout.bin",o);W(O+"/"+d+"/exit.txt",c+"\n")}
