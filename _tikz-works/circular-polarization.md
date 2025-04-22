---
layout: tikz-works-detail
image_title: 円偏光
tags: 
 - electromagnetism
image_src: circular-polarization.gif
tex_src:   circular-polarization.tex
---

\\(z\\) 軸方向に伝播する右回り円偏光（right-handed circular polarization: RHCP）を示した図です。
青色の矢印は電場ベクトル、赤色の矢印はある \\(xy\\) 平面で観測した電場ベクトルを表します。  

\\(z\\) 軸方向に伝播する電界ベクトル \\(\boldsymbol{E}(z,t)\\) は次式で与えられます。
\\[
\boldsymbol{E}(z,t) = [E_x(z,t), E_y(z,t), 0] = [A_x \cos(\omega t - kz + \phi_x), A_y \cos(\omega t - kz + \phi_y), 0]
\\]

ここで各変数は以下を表します。
- \\(A_x, A_y\\)：電界の \\(x, y\\) 成分の振幅
- \\(\phi_x, \phi_y\\)：電界の \\(x, y\\) 成分の初期位相
- \\(\omega\\)：角周波数
- \\(k\\)：波数

初期位相の差 \\(\delta := \phi_y - \phi_x\\) について、\\(m\\) を整数として \\(\delta = (2m + 1/2)\pi\\) が成立するときに右回り円偏光、\\(\delta = (2m - 1/2)\pi\\) が成立するときに左回り円偏光となります。

詳しい解説は、[こちら](https://zenn.dev/kossyprg/articles/daigakudenki-polarization)を参照してください。
