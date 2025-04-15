---
layout: tikz-works-detail
image_title: n入力加算回路
tags: 
 - electronic-circuit
image_src: opamp-adder-circuit-n-inputs.png
tex_src:   opamp-adder-circuit-n-inputs.tex
---

オペアンプのn入力加算回路（adder circuit）の基本構成です。

- \\(v_1, v_2,\\ldots, v_n\\)：入力電圧  
- \\(R_1, R_2,\\ldots, R_n, R_\\mathrm{F}\\)：抵抗  
- \\(v_\\mathrm{o}\\)：出力端子

出力電圧 \\(v_\\mathrm{o}\\) は次式で与えられます。

\\[
v_\\mathrm{o} = -\\sum_{i=1}^n \\dfrac{R_\\mathrm{F}}{R_i}v_i
\\]
