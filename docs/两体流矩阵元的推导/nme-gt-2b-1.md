# GT 双体流推导（1）：Term 01A–04D

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。


## GT 两体流算符的约化矩阵元

两体流算符为[\cite{PhysRevC.98.031301}]


$$
\begin{align}
\mathbb{J}_{2 b}(\boldsymbol{x})=\sum_{k<l}^{A} \boldsymbol{J}_{\boldsymbol{k} l}(\boldsymbol{x})=\frac{1}{2} \sum_{k \neq l}^{A} \boldsymbol{J}_{\boldsymbol{k} \boldsymbol{l}}(\boldsymbol{x})
\end{align}
$$


$$
\begin{align}
&\!\!\! \boldsymbol{J}_{kl}(x) = \frac{2c_3g_A}{m_N F_{\pi}^2} \bigg\{ m_{\pi}^2 \left[ \left( \frac{\boldsymbol{\sigma}_l}{3} - \boldsymbol{\sigma}_l \cdot \hat{\textbf{\textit{r}}}\, \hat{\textbf{\textit{r}}} \right) Y_2(r) - \frac{\boldsymbol{\sigma}_l}{3} Y_0(r) \right] + \frac{\boldsymbol{\sigma}_l}{3} \delta(\textbf{\textit{r}}) \bigg\} \boldsymbol{\tau}_l^{\pm} \delta(\boldsymbol{x} - \textbf{\textit{r}}_k) + (k \leftrightarrow l) \notag \\
&\!\!\! \quad + \left( c_4 + \frac{1}{4} \right) \frac{g_A}{2m_N F_{\pi}^2} \bigg\{ m_{\pi}^2 \left[ \left( \frac{\boldsymbol{\sigma}_\times}{3} - \boldsymbol{\sigma}_k \times \hat{\textbf{\textit{r}}}\, \boldsymbol{\sigma}_l \cdot \hat{\textbf{\textit{r}}} \right) Y_2(r) - \frac{\boldsymbol{\sigma}_\times}{3} Y_0(r) \right] + \frac{\boldsymbol{\sigma}_\times}{3} \delta(\textbf{\textit{r}}) \bigg\} \boldsymbol{\tau}_\times^{\pm} \delta(\boldsymbol{x} - \textbf{\textit{r}}_k) + (k \leftrightarrow l) \notag \\
&\!\!\! \quad + \frac{ig_A}{8m_N F_{\pi}^2} \boldsymbol{\tau}_\times^{\pm} \Bigg[ \boldsymbol{\sigma}_l \cdot \hat{\textbf{\textit{r}}}\, \hat{\textbf{\textit{r}}} \, m_{\pi}^2 \left( 1 + \frac{2}{m_{\pi}r} + \frac{2}{m_{\pi}^2 r^2} \right) Y_0(r) + \frac{\boldsymbol{\sigma}_l \cdot \hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}}}{r^2} Y_1(r) - \frac{\boldsymbol{\sigma}_l}{r^2} Y_1(r) \Bigg] \delta(\boldsymbol{x} - \textbf{\textit{r}}_k) + (k \leftrightarrow l) \notag \\
&\!\!\! \quad - \frac{g_A}{4m_N F_{\pi}^2} \Big[ 2 d_1 (\boldsymbol{\sigma}_k \boldsymbol{\tau}_k^{\pm} + \boldsymbol{\sigma}_l \boldsymbol{\tau}_l^{\pm}) + d_2 \boldsymbol{\sigma}_\times \boldsymbol{\tau}_\times^{\pm} \Big] \delta(\textbf{\textit{r}}) \delta(\boldsymbol{x} - \textbf{\textit{r}}_k)
\end{align}
$$

其中，


$$
\begin{gather}
c_i = m_N \bar{c}_i \,\,,  d_i = \frac{m_N F_\pi^2}{g_A} \bar{d}_i \,\, \\
m_\pi = 139.57 \,\,MeV,  F_\pi = 92.4 \,\,MeV \\
\textbf{\textit{r}}=(\textbf{\textit{r}}_k-\textbf{\textit{r}}_l),\, \boldsymbol{\sigma}_\times=\boldsymbol{\sigma}_k \times \boldsymbol{\sigma}_l,\, \boldsymbol{\tau}_\times^{\pm}=(\boldsymbol{\tau}_k \times \boldsymbol{\tau}_l)^{\pm} \\
Y_0(r) = \frac{e^{-m_\pi r}}{4\pi r}[fm^{-1}] \\
Y_1(r) = -r\frac{\partial}{\partial r} Y_0(r) = (m_\pi r + 1) Y_0(r) [fm^{-1}] \\
Y_2(r) = \frac{1}{m_\pi^2} r \frac{\partial}{\partial r} \frac{1}{r} \frac{\partial}{\partial r} Y_0(r) = \big( 1 + \frac{3}{m_\pi r} +  \frac{3}{m_\pi^2 r^2} \big) Y_0(r) [fm^{-1}]
\end{gather}
$$

**Term $[01A_1]$：**（注意：$Y_2(r)$ 与 $Y_2(\sqrt{2}r)$ 中的变量 $r$ 代表不同的量，请注意区分；其他各项同样如此。）


$$
\begin{align}
& [01A_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\, Y_2(r) \boldsymbol{\tau}_l^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \Big\langle n_a l_a j_a, n_b l_b j_b \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \boldsymbol{\sigma}_l\big]^1 \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_l^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \\
& \overset{(\ref{1324})}{=} \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_l^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \boldsymbol{\sigma}_l\big]^1 \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \underset{(\ref{MOSHINSKY-1})}{\overset{(\ref{MOSHINSKY})}{=}} \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_l^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \boldsymbol{\sigma}_l\big]^1 \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \underset{(\ref{tau-l})}{\overset{(\ref{abc})}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \notag \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}  \left\{\begin{array}{lll} \,\,\,0 & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \underset{P357(2)}{\overset{\text{[1]}}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \notag \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \delta_{L_{ab}L_{a^\prime b^\prime}}(-)^{1+L_{ab}+S_{a^\prime b^\prime}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\} \notag \\
& \cdot \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \underset{(\ref{sigma-l})}{\overset{(\ref{Ll-Y2})}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \notag \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \delta_{L_{ab}L_{a^\prime b^\prime}}(-)^{1+L_{ab}+S_{a^\prime b^\prime}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\} \notag \\
& \cdot (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}\delta_{L_{ab}L_{a^\prime b^\prime}}  \hat{L}_{ab} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle \\
& = \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

在代码中：(101)


$$
\begin{align}
& {\color{red} [01A_1]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1+J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[02B_1]$：**


$$
\begin{align}
& [02B_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}}\, Y_2(r) \boldsymbol{\tau}_l^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \underset{(\ref{MOSHINSKY-1})}{\overset{(\ref{1324})(\ref{MOSHINSKY})}{=}} \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_l^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}}\, Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \underset{(\ref{sigma-l-rr})}{\overset{(\ref{tau-l})}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[ \boldsymbol{\sigma}_l \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \big]^1 Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \overset{(\ref{bac})}{=} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \notag \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \underset{(\ref{sigma-l})}{\overset{(\ref{Ll-Y2-rrh})}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \notag \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \notag \\
& \cdot \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L+l^\prime+L_{ab}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& = \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1} \sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

在代码中：(102)


$$
\begin{align}
& {\color{red} [02B_1]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{m_N F_{\pi}^2} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

**Term $[03C_1]$：**（推导方法与 Term $[01A_1]$ 相同）


$$
\begin{align}
& [03C_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l Y_0(r) \boldsymbol{\tau}_l^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

在代码中：(103)


$$
\begin{align}
& {\color{red} [03C_1]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[04D_1]$：**


$$
\begin{align}
& [04D_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l \,\delta(\textbf{\textit{r}}) \boldsymbol{\tau}_l^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \overset{(\ref{1324})}{=} \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_l^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} [\delta(\textbf{\textit{r}}) \otimes \boldsymbol{\sigma}_l]^1 \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \underset{(\ref{tau-l})}{\overset{(\ref{abc})}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}  \left\{\begin{array}{lll} 0 & 1 & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\textbf{\textit{r}}) \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} \Big\rangle \notag \\
& \cdot \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \\
& \underset{P357(2)}{\overset{\text{[1]}}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}(-)^{1+L_{ab}+S_{a^\prime b^\prime}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}\delta_{L_{ab}L_{a^\prime b^\prime}}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\} \notag \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\textbf{\textit{r}}) \Big\| [n_{a^\prime} l_{a^\prime} \otimes n_{b^\prime} l_{b^\prime}]^{L_{a^\prime b^\prime}} \Big\rangle \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \\
& \underset{(\ref{lalb-deltar1r2})}{\overset{(\ref{sigma-l})}{=}} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}(-)^{1+L_{ab}+S_{a^\prime b^\prime}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}\delta_{L_{ab}L_{a^\prime b^\prime}}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty (-)^{l_{a^\prime}+l_b+L_{ab}}\frac{1}{4\pi}\delta_{L_{ab}L_{a^\prime b^\prime}}\,\hat{l}^{\,2}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{L}_{ab}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \\
& = \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1+J_{ab}+l_{a^\prime}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

在代码中：(104)


$$
\begin{align}
& {\color{red} [04D_1]} = \frac{c_3g_A}{\sqrt{6}\pi m_N F_{\pi}^2} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1+J_{ab}+l_{a^\prime}+l_b}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$
