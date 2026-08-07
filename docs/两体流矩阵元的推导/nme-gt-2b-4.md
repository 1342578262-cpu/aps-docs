# GT 双体流推导（4）：动量项 Term 11k–13M

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。

**Term $[11k_1]$：**


$$
\begin{align}
& [11k_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}} \,\Big(1+\frac{2}{m_\pi r}+\frac{2}{m_\pi^2 r^2}\Big)Y_0(r)\boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \notag \\
& \underset{(\ref{MOSHINSKY-1})}{\overset{(\ref{1324})(\ref{MOSHINSKY})}{=}} \big\langle \tau_a\tau_b \big|\boldsymbol{\tau}_\times^- \big|\tau_{a^\prime}\tau_{b^\prime}\big\rangle \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}}\, \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \underset{(\ref{sigma-l-rr})}{\overset{(\ref{tau-cha-})}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[ \boldsymbol{\sigma}_l \otimes [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \big]^1 \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle^{J_{a^\prime b^\prime}} \\
& \overset{(\ref{bac})}{=} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \notag \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \boldsymbol{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{a^\prime b^\prime}} \Big\rangle \notag \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) [\hat{\textbf{\textit{r}}} \otimes \hat{\textbf{\textit{r}}}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{a^\prime b^\prime}} \Big\rangle \\
& \underset{(\ref{sigma-l})}{\overset{(\ref{Ll-Y2-rrh})}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} \hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{a^\prime b^\prime}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \notag \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \notag \\
& \cdot \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l^\prime+L^\prime+L_{ab}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{a^\prime b^\prime}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L^\prime \end{array}\right\} \notag \\
& \cdot \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{1} 4\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

代码中：


$$
\begin{align}
& {\color{red} [11k_1]} = \frac{\sqrt{6}\, g_A m_\pi^2}{2m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

**Term $[12L_1]$：**（推导方法与 Term $[11K_1]$ 相同）


$$
\begin{align}
& [12L_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}} \, \frac{1}{r^2}Y_1(r)\boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \notag \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{1} 2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

代码中：


$$
\begin{align}
& {\color{red} [12L_1]} = \frac{\sqrt{6}\, g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) \,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

**Term $[13M_1]$：**（推导方法与 Term $[01A_1]$ 相同）


$$
\begin{align}
& [13M_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_l\frac{1}{r^2}Y_1(r)\boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \notag \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{1+J_{ab}}\,2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
&\!\!\!\!\! \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

代码中：


$$
\begin{align}
& {\color{red} [13M_1]} = \frac{\sqrt{6}\,g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{1+J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
&\!\!\!\!\! \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

**Term $[11k_2]$：**（该项对应 $[11k_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [11k_2] = -\Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}} \,\Big(1+\frac{2}{m_\pi r}+\frac{2}{m_\pi^2 r^2}\Big)Y_0(r)\boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \notag \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) 4\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
&\! \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

代码中：


$$
\begin{align}
& {\color{red} [11k_2]} = \frac{\sqrt{6}\, g_A m_\pi^2}{2m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{1} \,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
&\! \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

**Term $[12L_2]$：**（该项对应 $[12L_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [12L_2] = -\Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k\cdot\hat{\textbf{\textit{r}}}\,\hat{\textbf{\textit{r}}} \, \frac{1}{r^2}Y_1(r)\boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \notag \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) 2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

代码中：


$$
\begin{align}
& {\color{red} [12L_2]} = \frac{\sqrt{6}\, g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{1} \,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime} \hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}L_{a^\prime b^\prime}S_{a^\prime b^\prime}} (-)^{L_{ab}+S_{a^\prime b^\prime}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{a^\prime b^\prime}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{a^\prime} & l_{b^\prime} & L_{a^\prime b^\prime} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{a^\prime b^\prime}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \notag \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{a^\prime b^\prime} & S_{a^\prime b^\prime} & J_{a^\prime b^\prime} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{a^\prime b^\prime} & h \\ l^\prime & l & L \end{array}\right\}
\end{align}
$$

**Term $[13M_2]$：**（该项对应 $[13M_1]$ 的交换项 $(k \longleftrightarrow l)$）


$$
\begin{align}
& [13M_2] = -\Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \boldsymbol{\sigma}_k\frac{1}{r^2}Y_1(r)\boldsymbol{\tau}_\times^- \Big\| n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{a^\prime b^\prime}} \notag \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{J_{ab}}\,2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$

代码中：


$$
\begin{align}
& {\color{red} [13M_2]} = \frac{\sqrt{6}\,g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{a^\prime},\frac{1}{2}}\delta_{\tau_b,\tau_{b^\prime}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{b^\prime},\frac{1}{2}}\delta_{\tau_a,\tau_{a^\prime}}\tau_a \Big) (-)^{J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{a^\prime}\hat{j}_{b^\prime}\hat{J}_{ab}\hat{J}_{a^\prime b^\prime} \notag \\
& \cdot \sum_{L_{ab}S_{ab}S_{a^\prime b^\prime}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{a^\prime b^\prime}^2  \left\{\begin{array}{ccc} S_{a^\prime b^\prime} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{a^\prime b^\prime} & J_{ab} & 1 \\ S_{ab} & S_{a^\prime b^\prime} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{a^\prime} & l_{b^\prime} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{a^\prime b^\prime} \\j_{a^\prime} & j_{b^\prime} & J_{a^\prime b^\prime} \end{array}\right\} \notag \\
& \cdot \sum_{nlNL,n^\prime} \big\langle\!\big\langle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \big\rangle\!\big\rangle^{L_{ab}} \big\langle\!\big\langle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \big\rangle\!\big\rangle^{L_{ab}} \notag \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{align}
$$
