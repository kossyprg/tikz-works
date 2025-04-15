---
layout: tikz-works-detail
image_title: フェーザと正弦波信号の関係
tags: 
 - math
image_src: phasor-animation.gif
tex_src:   phasor-animation.tex
---

フェーザ（phasor）とそれに対応する時間領域の正弦波信号との関係を示しています。  
振幅 \\(V\\)、角周波数 \\(\omega\\) の正弦波信号 \\(v(t)\\) を次式で与えます。

\\[v(t) = V\sin{(\omega t + \theta)}\\]

ここで \\(\theta\\) は初期位相です。
フェーザ \\(\dot{V} = V\mathrm{e}^{\mathrm{j}\theta}\\) を用いると、正弦波信号は次式で表されます。  

\\[v(t) = \mathrm{Im}[\dot{V}\mathrm{e}^{\mathrm{j}\omega t}]\\]

ただし、\\(\mathrm{Im}[\cdot]\\) は虚部を取る操作です。
