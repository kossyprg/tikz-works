---
layout: tikz-works-detail
image_title: 楕円偏光
tags: 
 - electromagnetism
image_src: elliptical-polarization.gif
tex_src:   elliptical-polarization.tex
---

\\(z\\) 軸方向に伝播する楕円偏光（elliptical polarization）を示した図です。
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

電界ベクトルの \\(x, y\\) 成分 \\(E_x, E_y\\) は、\\(A_x \neq 0, A_y \neq 0\\) の条件下で次式を満たします。

\\[
\left( \frac{E_x}{A_x} \right)^2 + \left( \frac{E_y}{A_y} \right)^2 - \frac{2E_xE_y \cos \delta}{A_xA_y} = \sin^2 \delta 
\\]

ただし、初期位相の差を \\(\delta := \phi_y - \phi_x\\) としています。
楕円の \\(x\\) 軸から測った傾き角 \\(\theta\\) について次式が成立します。

\\[
\theta = 
\begin{cases}
\pi/4 & (A_x = A_y) \newline
\tan 2\theta = \dfrac{2A_xA_y \cos \delta}{A_x^2 - A_y^2} & (A_x \neq A_y)
\end{cases}
\\]

詳しい解説は、[こちら](https://zenn.dev/kossyprg/articles/daigakudenki-polarization)を参照してください。
