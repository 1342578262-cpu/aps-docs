# GT 双体流推导（3）：Term 09I–10J 与交换项

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。

**Term $[09I_1]$：**（推导方法与 Term $[04D_1]$ 相同）


$$
\begin{align}
& [09I_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l \,\delta(\textbf{\textit{r}}) \boldsymbol{\tau}_l^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{1+J_{ab}+l_{a^\prime}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

在代码中：(109)


$$
\begin{align}
& {\color{red} [09I_1]} = \frac{\sqrt{6}d_1 g_A}{8\pi m_N F_{\pi}^2} \delta_{\tau_a \tau_{a^\prime}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{b^\prime}, \frac{1}{2}} (-)^{J_{ab}+l_{a^\prime}+l_b}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

**Term $[09I_2]$：**（该项对应 $[09I_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [09I_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k \,\delta(\textbf{\textit{r}}) \boldsymbol{\tau}_k^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1+J_{ab}+l_{a^\prime}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

在代码中：(110)


$$
\begin{align}
& {\color{red} [09I_2]} = \frac{\sqrt{6}d_1 g_A}{8\pi m_N F_{\pi}^2} \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{J_{ab}+l_{a^\prime}+l_b}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

**Term $[10J_1]$：**（该项对应 $[08H_1]$ 的交换项）


$$
\begin{align}
& [10J_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_\times \,\delta(\textbf{\textit{r}}) \boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \frac{6\sqrt{6}}{\pi} (-)^{1+l_{a^\prime}+l_b+J_{ab}} \hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

在代码中：(111)


$$
\begin{align}
& {\color{red} [10J_1]} = \frac{3\sqrt{6}d_2 g_A}{2\pi m_N F_{\pi}^2} (-)^{l_{a^\prime}+l_b+J_{ab}} \hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

**Term $[01A_2]$：**（该项对应 $[01A_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [01A_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k\, Y_2(r) \boldsymbol{\tau}_k^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

在代码中：(112)


$$
\begin{align}
& {\color{red} [01A_2]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1+J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[02B_2]$：**（该项对应 $[02B_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [02B_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}}\, Y_2(r) \boldsymbol{\tau}_k^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1} \sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

在代码中：(113)


$$
\begin{align}
& {\color{red} [02B_2]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{m_N F_{\pi}^2} \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

**Term $[03C_2]$：**（该项对应 $[03C_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [03C_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k Y_0(r) \boldsymbol{\tau}_k^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

在代码中：(114)


$$
\begin{align}
& {\color{red} [03C_2]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[04D_2]$：**（该项对应 $[04D_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [04D_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k \,\delta(\textbf{\textit{r}}) \boldsymbol{\tau}_k^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1+J_{ab}+l_{a^\prime}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

在代码中：(115)


$$
\begin{align}
& {\color{red} [04D_2]} = \frac{c_3g_A}{\sqrt{6}\pi m_N F_{\pi}^2} \delta_{\tau_b \tau_{b^\prime}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{a^\prime}, \frac{1}{2}} (-)^{1+J_{ab}+l_{a^\prime}+l_b}\,\hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

**Term $[05E_2]$：**（该项对应 $[05E_1]$ 的交换项 $(k \longleftrightarrow l)$，且 $[05E_2]=[05E_1]$）


$$
\begin{align}
& [05E_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_\times Y_2(r) \boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = (-)^{1+J_{ab}}\,24\sqrt{6}\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

在代码中：(116)


$$
\begin{align}
& {\color{red} [05E_2]} = \Big(c_4+\frac{1}{4}\Big)\frac{4\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} (-)^{1+J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[06F_2]$：**（该项对应 $[06F_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [06F_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l \times \hat{\textbf{\textit{r}}}\, \boldsymbol{\sigma}_k \cdot \hat{\textbf{\textit{r}}}\, Y_2(r) \boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = (-)^{1} 24\sqrt{6} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime}\Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{g,h=0}^2 (-)^{g+1}(-)^{g+h} \hat{g}^2\,\hat{h}\,  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}
\end{align}
$$

在代码中：(117)


$$
\begin{align}
& {\color{red} [06F_2]} = \Big(c_4+\frac{1}{4}\Big)\frac{12\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime}\Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{g,h=0}^2 (-)^{g+1}(-)^{g+h} \hat{g}^2\,\hat{h}\,  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}
\end{align}
$$

**Term $[07G_2]$：**（该项对应 $[07G_1]$ 的交换项 $(k \longleftrightarrow l)$，且 $[07G_2]=[07G_1]$）


$$
\begin{align}
& [07G_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_\times \,Y_0(r) \boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = (-)^{1+J_{ab}}\,24\sqrt{6}\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

在代码中：(118)


$$
\begin{align}
& {\color{red} [07G_2]} = \Big(c_4+\frac{1}{4}\Big)\frac{4\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} (-)^{J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[08H_2]$：**（该项对应 $[08H_1]$ 的交换项 $(k \longleftrightarrow l)$，且 $[08H_2]=[08H_1]$）


$$
\begin{align}
& [08H_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_\times \,\delta(\textbf{\textit{r}}) \boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \\
& = \frac{6\sqrt{6}}{\pi} (-)^{1+l_{a^\prime}+l_b+J_{ab}} \hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

在代码中：(119)


$$
\begin{align}
& {\color{red} [08H_2]} = \Big(c_4+\frac{1}{4}\Big) \frac{\sqrt{6}g_A}{\pi m_N F_{\pi}^2} (-)^{1+l_{a^\prime}+l_b+J_{ab}} \hat{l}_{a^\prime}\hat{l}_{b^\prime}\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{a^\prime} l_{a^\prime} n_{b^\prime} l_{b^\prime} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{a^\prime} 0 l 0}^{l_a 0} \,C_{l_{b^\prime} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{b^\prime} & l_{a^\prime} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{align}
$$

下面的算符代表动量依赖项，其贡献相对较小。
