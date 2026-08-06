---
title: 4. 附录
---

# 附录：基础公式与推导公式

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。


## 基础公式

定义 $\tau_n=\frac{1}{2},\tau_p=-\frac{1}{2}$，其中 $n$ 和 $p$ 分别代表中子和质子。


$$
\begin{align}
& \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_l^{\pm} \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle  = \delta_{\tau_a \tau_{a^\prime}} \delta_{\tau_b, \pm\frac{1}{2}} \delta_{\tau_{b^\prime}, \mp\frac{1}{2}} \label{tau-l}
\end{align}
$$


$$
\begin{align}
& \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_k^{\pm} \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle  = \delta_{\tau_b \tau_{b^\prime}} \delta_{\tau_a, \pm\frac{1}{2}} \delta_{\tau_{a^\prime}, \mp\frac{1}{2}} \label{tau-k}
\end{align}
$$


$$
\begin{align}
\Big\langle \frac{1}{2}\Big\|\boldsymbol{\sigma}\Big\|\frac{1}{2} \Big\rangle \underset{P31(2.39)}{\overset{\cite{Suhonen2013From}}{=}} \sqrt{6} \label{jzy-sigma}
\end{align}
$$


## 教科书与文献中的公式


$$
\begin{align}
& \big|j_{1} j_{3}\left(j_{13}\right) j_{2} j_{4}\left(j_{24}\right) \big\rangle^{j m} \underset{P16(1.84)}{\overset{\cite{Suhonen2013From}}{=}} \sum_{j_{12} j_{34}} \hat{j}_{12}\, \hat{j}_{34}\, \hat{j}_{13}\, \hat{j}_{24}  \left\{\begin{array}{lll}j_{1} & j_{2} & j_{12} \\j_{3} & j_{4} & j_{34} \\j_{13} & j_{24} & \,\,j\end{array}\right\}  \big|j_{1} j_{2}\left(j_{12}\right) j_{3} j_{4}\left(j_{34}\right) \big\rangle^{jm} \label{1324}
\end{align}
$$

Moshinsky 变换（$\textbf{\textit{r}}=\frac{1}{\sqrt{2}}(\textbf{\textit{r}}_1-\textbf{\textit{r}}_2)$）：


$$
\begin{align}
\big|n_{1} l_{1}, n_{2} l_{2}\big\rangle^{\lambda \mu} \underset{P192(1)}{\overset{\cite{KAMUNTAVICIUS2001191}}{=}} \sum_{n l N L} \big|N L, n l \big\rangle^{\lambda \mu} \big\langle\!\big\langle N L, n l \big| n_{1} l_{1}, n_{2} l_{2} \big\rangle\!\big\rangle^{\lambda} \label{MOSHINSKY}
\end{align}
$$

该变换满足以下关系：


$$
\begin{align}
2 n_{1}+l_{1}+2 n_{2}+l_{2} \underset{P193(5)}{\overset{\cite{KAMUNTAVICIUS2001191}}{=}} 2 n+l+2 N+L \label{MOSHINSKY-1}
\end{align}
$$

不同算符的约化矩阵元：


$$
\begin{align}
\langle l \|1\| l \rangle = \hat{l} \label{jzy-1}
\end{align}
$$


## 由教科书和文献推导出的简单公式

$**\bigstar**$ 如文献[1]第479页(28)式所示，


$$
\begin{gather}
\langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime}|^{j^{\prime} m^{\prime}} [\hat{\mathbf{P}}_{a}(1) \otimes \hat{\mathbf{Q}}_{b}(2)]^{c \gamma}|n_{1} j_{1}, n_{2} j_{2} \rangle^{j m} \notag \\
=(-1)^{2 c} \,\hat{c}\hat{j} C_{j m c \gamma}^{j^{\prime} m^{\prime}}
        \left\{\begin{array}{ccc}
        a & b & c \\
        j_{1}^{\prime} & j_{2}^{\prime} &     j^{\prime} \\
        j_{1} & j_{2} & j
        \end{array}\right\}
    \langle n_{1}^{\prime} j_{1}^{\prime}\|\hat{\mathbf{P}}_{a}(1)\| n_{1} j_{1}\rangle \langle n_{2}^{\prime} j_{2}^{\prime}\|\hat{\mathbf{Q}}_{b}(2)\| n_{2} j_{2}\rangle \\
\underset{P475(2)}{\overset{\cite{doi:10.1142/0270}}{\Longrightarrow}} (-)^{2c}C_{j m c \gamma}^{j^\prime m^\prime}\frac{1}{\hat{j^\prime}} \langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime}\|^{j^{\prime}} [\hat{\mathbf{P}}_{a}(1) \otimes \hat{\mathbf{Q}}_{b}(2)]^{c}\|n_{1} j_{1}, n_{2} j_{2} \rangle^{j} \notag \\
=(-1)^{2 c} \,\hat{c}\hat{j} C_{j m c \gamma}^{j^{\prime} m^{\prime}}
        \left\{\begin{array}{ccc}
        a & b & c \\
        j_{1}^{\prime} & j_{2}^{\prime} &     j^{\prime} \\
        j_{1} & j_{2} & j
        \end{array}\right\}
    \langle n_{1}^{\prime} j_{1}^{\prime}\|\hat{\mathbf{P}}_{a}(1)\| n_{1} j_{1}\rangle \langle n_{2}^{\prime} j_{2}^{\prime}\|\hat{\mathbf{Q}}_{b}(2)\| n_{2} j_{2}\rangle \\
\Longrightarrow {\color{blue} \langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime}\|^{j^{\prime}} [\hat{\mathbf{P}}_{a}(1) \otimes \hat{\mathbf{Q}}_{b}(2)]^{c}\|n_{1} j_{1}, n_{2} j_{2} \rangle^{j} } \notag \\
{\color{blue} = \hat{c}\hat{j}\hat{j^\prime}
        \left\{\begin{array}{ccc}
        a & b & c \\
        j_{1}^{\prime} & j_{2}^{\prime} &     j^{\prime} \\
        j_{1} & j_{2} & j
        \end{array}\right\}
    \langle n_{1}^{\prime} j_{1}^{\prime}\|\hat{\mathbf{P}}_{a}(1)\| n_{1} j_{1}\rangle \langle n_{2}^{\prime} j_{2}^{\prime}\|\hat{\mathbf{Q}}_{b}(2)\| n_{2} j_{2}\rangle } \label{abc}
\end{gather}
$$

$**\bigstar**$ 如文献[8]第34页(A-47)式所示，


$$
\begin{gather}
{\color{blue}\left\langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime} \left\|^{j^{\prime}} [\hat{\mathbf{Q}}_{b}(2) \otimes \hat{\mathbf{P}}_{a}(1)]^{c}\right\| n_{1} j_{1}, n_{2} j_{2} \right\rangle^j} \notag \\
{\color{blue} =(-)^{a+b-c} \hat{c}\hat{j}\hat{j^\prime} 
        \left\{\begin{array}{ccc}
        a & b & c \\
        j_{1}^{\prime} & j_{2}^{\prime} & j^{\prime} \\
        j_{1} & j_{2} & j
        \end{array}\right\}
    \left\langle n_{1}^{\prime} j_{1}^{\prime}\left\|\hat{\mathbf{P}}_{a}(1)\right\| n_{1} j_{1}\right\rangle\left\langle n_{2}^{\prime} j_{2}^{\prime}\left\|\hat{\mathbf{Q}}_{b}(2)\right\| n_{2} j_{2}\right\rangle} \label{bac}
\end{gather}
$$

$**\bigstar**$ 如文献(\ref{abc})所示，


$$
\begin{align}
& \langle j_{1}^\prime, j_{2}^\prime\|^{j^{\prime}} \hat{\mathbf{P}}_{a}(1) \|j_{1}, j_{2} \rangle^{j} \notag \\
& = \hat{a}\hat{j}\hat{j^\prime}
        \left\{\begin{array}{ccc}
        a & 0 & a \\
        j_{1}^\prime & j_{2}^\prime & j^{\prime} \\
        j_{1} & j_{2} & j
        \end{array}\right\}
    \langle j_{1}^\prime\|\hat{\mathbf{P}}_{a}(1)\| j_{1}\rangle \langle j_{2}^\prime\| 1 \| j_{2}\rangle \\
& \underset{P357(2)}{\overset{\cite{doi:10.1142/0270}}{=}} \delta_{j_2 j_2^\prime}(-)^{a+j_1^\prime+j_2+j} \frac{\hat{j}\hat{j^\prime}}{\hat{j}_2}
        \left\{\begin{array}{ccc}
        j^\prime & j & a \\
        j_{1} & j_{1}^\prime & j_2
        \end{array}\right\}
    \langle j_{1}^\prime\|\hat{\mathbf{P}}_{a}(1)\| j_{1}\rangle \langle j_{2}\| 1 \| j_{2}\rangle \\
& \underset{P484(9)}{\overset{\cite{doi:10.1142/0270}}{=}} \delta_{j_2 j_2^\prime}(-)^{a+j_1^\prime+j_2+j} \hat{j}\hat{j^\prime}
        \left\{\begin{array}{ccc}
        j^\prime & j & a \\
        j_{1} & j_{1}^\prime & j_2
        \end{array}\right\}
    \langle j_{1}^\prime\|\hat{\mathbf{P}}_{a}(1)\| j_{1}\rangle \label{j1j2-1}
\end{align}
$$

$**\bigstar**$ 如文献(\ref{abc})所示，


$$
\begin{align}
& \langle j_{1}^\prime, j_{2}^\prime\|^{j^{\prime}} \hat{\mathbf{Q}}_{b}(2)\|j_{1}, j_{2} \rangle^{j} \notag \\
& = \hat{b}\hat{j}\hat{j^\prime}
        \left\{\begin{array}{ccc}
        0 & b & b \\
        j_{1}^\prime & j_{2}^\prime & j^{\prime} \\
        j_{1} & j_{2} & j
        \end{array}\right\}
    \langle j_{1}^\prime\|1\| j_{1}\rangle \langle j_{2}^\prime\|\hat{\mathbf{Q}}_{b}(2)\| j_{2}\rangle \\
& \underset{P357(2)}{\overset{\cite{doi:10.1142/0270}}{=}}  \delta_{j_1 j_1^\prime}(-)^{b+j_1+j_2+j^\prime} \frac{\hat{j}\hat{j^\prime}}{\hat{j}_1}
        \left\{\begin{array}{ccc}
        j & j^\prime & b \\
        j_{2}^\prime & j_{2} & j_1
        \end{array}\right\}
    \langle j_{1}\|1\| j_{1}\rangle \langle j_{2}^\prime\|\hat{\mathbf{Q}}_{b}(2)\| j_{2}\rangle \\
& \underset{P484(9)}{\overset{\cite{doi:10.1142/0270}}{=}} \delta_{j_1 j_1^\prime}(-)^{b+j_1+j_2+j^\prime} \hat{j}\hat{j^\prime}
        \left\{\begin{array}{ccc}
        j & j^\prime & b \\
        j_{2}^\prime & j_{2} & j_1
        \end{array}\right\}
    \langle j_{2}^\prime\|\hat{\mathbf{Q}}_{b}(2)\| j_{2}\rangle \label{j1j2-2}
\end{align}
$$

${\color{red}\bigstar}\,\,$ 如文献[1]第165页(18)式所示，


$$
\begin{align}
& \delta(\textbf{\textit{r}}_1-\textbf{\textit{r}}_2) = \frac{\delta(r_1-r_2)}{r_1^2}\sum_{l=0}^\infty \big(\hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_1) \cdot \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_2)\big) \\
& \underset{P65(35)}{\overset{\cite{doi:10.1142/0270}}{=}} \frac{\delta(r_1-r_2)}{r_1^2}\sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\big[\hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_1) \otimes \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_2)\big]^0 \label{delta-r1r2}
\end{align}
$$


<!-- eqreset -->

## 推导公式


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \notag \\
&  \overset{(\ref{j1j2-2})}{=} (-)^{S_{ab}}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
&  \overset{(\ref{jzy-sigma})}{=} (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \label{sigma-l}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_k \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \\
&  \overset{(\ref{j1j2-1})}{=} (-)^{S_{a^\prime b^\prime}} \hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{ab} & S_{a^\prime b^\prime} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
&  \overset{(\ref{jzy-sigma})}{=} (-)^{S_{a^\prime b^\prime}} \sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{ab} & S_{a^\prime b^\prime} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \\
&  = (-)^{S_{a^\prime b^\prime}} \sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \label{sigma-k}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& \overset{(\ref{j1j2-2})}{=} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & 0 \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{\textbf{\textit{r}}} \Big\| Y_2(r) \Big\| n^\prime l^\prime \Big\rangle \\
& = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & 0 \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l^\prime \Big\rangle \Big\langle \underbrace{l}_{\hat{\textbf{\textit{r}}}} \Big\| 1 \Big\| l^\prime \Big\rangle \\
& \overset{(\ref{jzy-1})}{=} \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{l}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & 0 \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l^\prime \Big\rangle \\
& \underset{P299(1)}{\overset{\cite{doi:10.1142/0270}}{=}} \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{l}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime} (-)^{L_{ab}+l+L^\prime}\delta_{L_{ab}L_{a^\prime b^\prime}}\frac{1}{\hat{L}_{ab}\hat{l}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l^\prime \Big\rangle \\
& = \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}\delta_{L_{ab}L_{a^\prime b^\prime}} \hat{L}_{ab} \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l \Big\rangle \label{Ll-Y2}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \boldsymbol{\sigma}_l\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}} \notag \\
& \underset{P66(8)}{\overset{\cite{doi:10.1142/0270}}{=}} -\sqrt{3} \big[ [\boldsymbol{\sigma}_l \otimes \hat{\textbf{\textit{r}}}]^0 \otimes \hat{\textbf{\textit{r}}} \big]^1 \\
& \underset{P69(1)}{\overset{\cite{doi:10.1142/0270}}{=}} -\sqrt{3} \sum_{h=0}^{2}\hat{h}  \left\{\begin{array}{ccc} 1 & 1 & 0 \\ 1 & 1 & h \end{array}\right\}  \big[ \boldsymbol{\sigma}_l \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \big]^1 \\
& \underset{P299(1)}{\overset{\cite{doi:10.1142/0270}}{=}} -\sqrt{3} \sum_{h=0}^{2}\hat{h}  (-)^{h}\frac{1}{3}  \big[ \boldsymbol{\sigma}_l \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \big]^1 \\
& = \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \big[ \boldsymbol{\sigma}_l \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \big]^1 \label{sigma-l-rr}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \notag \\
& = [\hat{\boldsymbol{C}_1} \otimes \hat{\boldsymbol{C}_1}]^h \\
& \underset{P131(7)}{\overset{\cite{doi:10.1142/0270}}{=}} \frac{4\pi}{3}[\hat{\boldsymbol{Y}_1} \otimes \hat{\boldsymbol{Y}_1}]^h \\
& \underset{P144(14)}{\overset{\cite{doi:10.1142/0270}}{=}} \frac{4\pi}{3}\sqrt{\frac{9}{4\pi(2h+1)}}C_{1010}^{h0}\hat{\boldsymbol{Y}}_h \\
& = \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0}\hat{\boldsymbol{Y}}_h \label{rr-h}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& \overset{(\ref{rr-h})}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \hat{\boldsymbol{Y}}_h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \overset{(\ref{j1j2-2})}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L^\prime+l^\prime+L_{ab}}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & h \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle n l \Big\| Y_2(\sqrt{2}r) \hat{\boldsymbol{Y}}_h \Big\| n^\prime l^\prime \Big\rangle \\
& = \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L^\prime+l^\prime+L_{ab}}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & h \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \Big\langle \underbrace{l}_{\hat{\textbf{\textit{r}}}} \Big\| \hat{\boldsymbol{Y}}_h \Big\| l^\prime \Big\rangle \\
& \underset{P496(105)}{\overset{\cite{doi:10.1142/0270}}{=}} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L^\prime+l^\prime+L_{ab}}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & h \\ l & l^\prime & L^\prime \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \sqrt{\frac{(2h+1)(2l^\prime+1)}{4\pi}} C_{l^\prime 0 h 0}^{l0} \\
& = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L+l^\prime+L_{ab}}C_{1010}^{h0} C_{l^\prime 0 h 0}^{l0}\hat{l^\prime} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & h \\ l & l^\prime & L \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \label{Ll-Y2-rrh}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [n l \otimes N L]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \Big\| [n^\prime l^\prime \otimes N^\prime L^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& \overset{(\ref{rr-h})}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \Big\langle [n l \otimes N L]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \hat{\boldsymbol{Y}}_h \Big\| [n^\prime l^\prime \otimes N^\prime L^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \overset{(\ref{j1j2-1})}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{a^\prime b^\prime}}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{\textbf{\textit{r}}} \Big\| Y_2(\sqrt{2}r) \hat{\boldsymbol{Y}}_h \Big\| n^\prime l^\prime \Big\rangle \\
& = \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{a^\prime b^\prime}}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \Big\langle \underbrace{l}_{\hat{\textbf{\textit{r}}}} \Big\| \hat{\boldsymbol{Y}}_h \Big\| l^\prime \Big\rangle \\
& \underset{P496(105)}{\overset{\cite{doi:10.1142/0270}}{=}} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{a^\prime b^\prime}}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L^\prime \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \sqrt{\frac{(2h+1)(2l^\prime+1)}{4\pi}} C_{l^\prime 0 h 0}^{l0} \\
& = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{a^\prime b^\prime}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \label{lL-Y2-rrh}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\textbf{\textit{r}}_1-\textbf{\textit{r}}_2) \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& \overset{(\ref{delta-r1r2})}{=} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\, \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \frac{\delta(r_1-r_2)}{r_1^2}\big[\hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_1) \otimes \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_2)\big]^0 \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \overset{(\ref{abc})}{=} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \end{array}\right\}  \delta(r_1-r_2) \Big\langle \underbrace{n_a l_a}_{\textbf{\textit{r}}_1} \Big\| \frac{1}{r_1^2}\hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_1) \Big\| n_{a^\prime} l_{a^\prime} \Big\rangle \notag \\
& \cdot \Big\langle \underbrace{n_b l_b}_{\textbf{\textit{r}}_2} \Big\| \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_2) \Big\| n_{b^\prime} l_{b^\prime} \Big\rangle \\
& = \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \end{array}\right\}  \delta(r_1-r_2) \Big\langle \underbrace{n_a l_a}_{r_1} \Big| \frac{1}{r_1^2} \Big| n_{a^\prime} l_{a^\prime} \Big\rangle  \Big\langle \underbrace{l_a}_{\hat{\textbf{\textit{r}}}_1} \Big\| \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_1) \Big\| l_{a^\prime} \Big\rangle \notag \\
& \cdot \Big\langle \underbrace{n_b l_b}_{r_2} \Big| 1 \Big| n_{b^\prime} l_{b^\prime} \Big\rangle  \Big\langle \underbrace{l_b}_{\hat{\textbf{\textit{r}}}_2} \Big\| \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_2) \Big\| l_{b^\prime} \Big\rangle \\
& = \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle  \Big\langle \underbrace{l_a}_{\hat{\textbf{\textit{r}}}_1} \Big\| \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_1) \Big\| l_{a^\prime} \Big\rangle \Big\langle \underbrace{l_b}_{\hat{\textbf{\textit{r}}}_2} \Big\| \hat{\boldsymbol{Y}}_l(\hat{\textbf{\textit{r}}}_2) \Big\| l_{b^\prime} \Big\rangle \\
& \underset{P496(105)}{\overset{\cite{doi:10.1142/0270}}{=}} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sqrt{\frac{(2l_{a^\prime}+1)(2l+1)}{4\pi}}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \sqrt{\frac{(2l_{b^\prime}+1)(2l+1)}{4\pi}}\,C_{l_{b^\prime} 0 l 0}^{l_b 0} \\
& \underset{P357(2)}{\overset{\cite{doi:10.1142/0270}}{=}} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}^2 \delta_{L_{ab}L_{a^\prime b^\prime}}(-)^{l+l_{a^\prime}+l_b+L_{ab}}\frac{1}{\hat{l}\hat{L}_{ab}}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sqrt{\frac{(2l_{a^\prime}+1)(2l+1)}{4\pi}}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \sqrt{\frac{(2l_{b^\prime}+1)(2l+1)}{4\pi}}\,C_{l_{b^\prime} 0 l 0}^{l_b 0} \\
& = \sum_{l=0}^\infty (-)^{l_{a^\prime}+l_b+L_{ab}}\frac{1}{4\pi}\delta_{L_{ab}L_{a^\prime b^\prime}}\,\hat{l}^{\,2}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{L}_{ab}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \label{lalb-deltar1r2}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_\times^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle = \big\langle \tau_a\tau_b \big| (\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \notag \\
& \underset{P5(19)}{\overset{\cite{PhysRevC.67.055206}}{=}} \big\langle \tau_a\tau_b \big| (\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^x - i(\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^y \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \underset{P68(30)}{\overset{\cite{doi:10.1142/0270}}{=}} \sqrt{2}\big\langle \tau_a\tau_b \big| (\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^{1-1} \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \underset{P66(5)}{\overset{\cite{doi:10.1142/0270}}{=}} -2i\big\langle \tau_a\tau_b \big| [\boldsymbol{\tau}_k \otimes \boldsymbol{\tau}_l]^{1-1} \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \underset{P479(25)}{\overset{\cite{doi:10.1142/0270}}{=}} -i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{a^\prime} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 -1} \Big\langle \frac{1}{2} \Big\| \boldsymbol{\tau}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \boldsymbol{\tau}_l \Big\| \frac{1}{2} \Big\rangle \\
& = -6i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{a^\prime} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 -1} \\
& = -6i \Big( C_{\frac{1}{2} \tau_{a^\prime} 1 -1}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 0}^{\frac{1}{2} \tau_b}C_{1 -1 1 0}^{1 -1} + C_{\frac{1}{2} \tau_{a^\prime} 1 0}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 -1}^{\frac{1}{2} \tau_b}C_{1 0 1 -1}^{1 -1} \Big) \\
& = 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \label{tau-cha-}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_\times^+ \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle = \big\langle \tau_a\tau_b \big| (\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^+ \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \notag \\
& \underset{P5(19)}{\overset{\cite{PhysRevC.67.055206}}{=}} \big\langle \tau_a\tau_b \big| (\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^x + i(\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^y \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \underset{P68(30)}{\overset{\cite{doi:10.1142/0270}}{=}} -\sqrt{2}\big\langle \tau_a\tau_b \big| (\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^{1 +1} \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \underset{P66(5)}{\overset{\cite{doi:10.1142/0270}}{=}} 2i\big\langle \tau_a\tau_b \big| [\boldsymbol{\tau}_k \otimes \boldsymbol{\tau}_l]^{1+1} \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \underset{P479(25)}{\overset{\cite{doi:10.1142/0270}}{=}} i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{a^\prime} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 1} \Big\langle \frac{1}{2} \Big\| \boldsymbol{\tau}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \boldsymbol{\tau}_l \Big\| \frac{1}{2} \Big\rangle \\
& = 6i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{a^\prime} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 1} \\
& = 6i \Big( C_{\frac{1}{2} \tau_{a^\prime} 1 1}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 0}^{\frac{1}{2} \tau_b}C_{1 1 1 0}^{1 1} + C_{\frac{1}{2} \tau_{a^\prime} 1 0}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{b^\prime} 1 1}^{\frac{1}{2} \tau_b}C_{1 0 1 1}^{1 1} \Big) \\
& = 4i \Big( -\delta_{\tau_a,\frac{1}{2}}\delta_{\tau_{a^\prime},-\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b + \delta_{\tau_b,\frac{1}{2}}\delta_{\tau_{b^\prime},-\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \label{tau-cha+}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_\times \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle = \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_k \times \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \notag \\
& \underset{P66(4)}{\overset{\cite{doi:10.1142/0270}}{=}} -\sqrt{2}i \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| [\boldsymbol{\sigma}_k \otimes \boldsymbol{\sigma}_l]^1 \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \\
& \overset{(\ref{abc})}{=} -\sqrt{2}i \sqrt{3}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
& \overset{(\ref{jzy-sigma})}{=} -6\sqrt{6}i \hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\} \label{sigma-cha}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \boldsymbol{\sigma}_k \times \hat{\textbf{\textit{r}}}\, \boldsymbol{\sigma}_l \cdot \hat{\textbf{\textit{r}}} \\
& \underset{P66(13)}{\overset{\cite{doi:10.1142/0270}}{=}} \sqrt{6}i \big[[\boldsymbol{\sigma}_k \otimes \hat{\textbf{\textit{r}}}]^1 \otimes [\boldsymbol{\sigma}_l \otimes \hat{\textbf{\textit{r}}}]^0\big]^1 \\
& \underset{P70(11)}{\overset{\cite{doi:10.1142/0270}}{=}} \sqrt{6}i \sum_{g,h=0}^2 \sqrt{3}\hat{g}\hat{h}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ 1 & 1 & 0 \\ g & h & 1 \end{array}\right\}  \big[[\boldsymbol{\sigma}_k \otimes \boldsymbol{\sigma}_l]^g \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h\big]^1 \\
& \underset{P357(2)}{\overset{\cite{doi:10.1142/0270}}{=}} \sqrt{6}i \sum_{g,h=0}^2 \sqrt{3}\,\hat{g}\,\hat{h}\, (-)^{h+1}\frac{1}{3}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \big[[\boldsymbol{\sigma}_k \otimes \boldsymbol{\sigma}_l]^g \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h\big]^1 \\
& = \sqrt{2}i \sum_{g,h=0}^2 \hat{g}\,\hat{h}\, (-)^{h+1}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \big[[\boldsymbol{\sigma}_k \otimes \boldsymbol{\sigma}_l]^g \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h\big]^1 \label{sigmak-r-sigmal-r}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| [\boldsymbol{\sigma}_k \otimes \boldsymbol{\sigma}_l]^g \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \\
& \overset{\ref{abc}}{=} \hat{g}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
& \overset{\ref{jzy-sigma}}{=} 6\hat{g}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\} \label{sigmakl-g}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [n l \otimes N L]^{L_{ab}} \Big\| r\hat{\textbf{\textit{r}}} \Big\| [n^\prime l^\prime \otimes N^\prime L^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{1+l+L^\prime+L_{a^\prime b^\prime}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & 1 \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| r \Big| n^\prime l^\prime \Big\rangle  \Big\langle \underbrace{l}_{\hat{\textbf{\textit{r}}}} \Big\| \hat{\textbf{\textit{r}}} \Big\| l^\prime \Big\rangle \\
& = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{1+l+L^\prime+L_{a^\prime b^\prime}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & 1 \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| r \Big| n^\prime l^\prime \Big\rangle \hat{l^\prime} C_{l^\prime 0 1 0}^{l 0}
\end{align}
$$


$$
\begin{align}
& {\color{red}\bigstar}\,\, \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| r_k\hat{\textbf{\textit{r}}}_k \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& = \delta_{n_a n_{a^\prime}}\delta_{l_a l_{a^\prime}}(-)^{1+l_{a^\prime}+l_{b^\prime}+L_{ab}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & 1 \\ l_b & l_{b^\prime} & l_{a^\prime} \end{array}\right\}  \Big\langle n_b l_b \Big\| r_k\hat{\textbf{\textit{r}}}_k \Big\| n_{b^\prime} l_{b^\prime} \Big\rangle \\
& = \delta_{n_a n_{a^\prime}}\delta_{l_a l_{a^\prime}}(-)^{1+l_{a^\prime}+l_{b^\prime}+L_{ab}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & 1 \\ l_b & l_{b^\prime} & l_{a^\prime} \end{array}\right\}  \Big\langle n_b l_b \Big| r_k \Big| n_{b^\prime} l_{b^\prime} \Big\rangle \Big\langle l_b \Big\| \hat{\textbf{\textit{r}}}_k \Big\| l_{b^\prime} \Big\rangle \\
& = \delta_{n_a n_{a^\prime}}\delta_{l_a l_{a^\prime}}(-)^{1+l_{a^\prime}+l_{b^\prime}+L_{ab}} \hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{a^\prime b^\prime} & L_{ab} & 1 \\ l_b & l_{b^\prime} & l_{a^\prime} \end{array}\right\}  \Big\langle n_b l_b \Big| r_k \Big| n_{b^\prime} l_{b^\prime} \Big\rangle \hat{l_{b^\prime}} C_{l_{b^\prime} 0 1 0}^{l_b 0}
\end{align}
$$
