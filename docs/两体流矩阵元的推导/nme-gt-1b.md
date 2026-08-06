# G T 算符约化矩阵元：单体流

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。

β衰变中原子跃迁矩阵元的形式为[\cite{PhysRevC.105.034349}]，


$$
\begin{align}
\langle F| H_{\beta}|I\rangle=-\frac{G_{\beta}}{\sqrt{2}} l^{\mu} \int d^{3} x\langle f| e^{-i \boldsymbol{q} \cdot \boldsymbol{x}} \mathbb{J}_{\mu}(\boldsymbol{x})|i\rangle .
\end{align}
$$

核跃迁矩阵元的形式为


$$
\begin{align}
\langle 1_\nu^+|\mathbb{M}^{\lambda\mu}|0^+\rangle = \int d^{3} x\langle 1_\nu^+| e^{-i \boldsymbol{q} \cdot \boldsymbol{x}} \mathbb{J}_{\mu}(\boldsymbol{x})|0^+\rangle = \int d^{3} x\langle 1_\nu^+| \mathbb{J}_{\mu}(\boldsymbol{x})|0^+\rangle.
\end{align}
$$

其中，


$$
\begin{align}
\mathbb{J}_{\mu}(\boldsymbol{x}) = \mathbb{J}_{1b}(\boldsymbol{x}) + \mathbb{J}_{2b}(\boldsymbol{x})
\end{align}
$$

下面所有约化矩阵元均在球谐振子基下推导。


## GT 单体流算符的约化矩阵元

单体流算符为


$$
\begin{align}
\mathbb{J}_{1 b}(\boldsymbol{x}) = -g_A\sum_{i}^{A} \boldsymbol{\sigma}_i \boldsymbol{\tau}_i^{\pm} \delta(\boldsymbol{x} - \textbf{\textit{r}}_k).
\end{align}
$$

得到的约化矩阵元为：


$$
\begin{align}
& \Big\langle n_a l_a j_a \tau_a \Big\| g_A \boldsymbol{\sigma} \boldsymbol{\tau}^{\pm} \Big\| n_b l_b j_b \tau_b \Big\rangle \\
& = g_A \delta_{\tau_{a},\pm\frac{1}{2}}\delta_{\tau_{b},\mp\frac{1}{2}} \Big\langle n_a l_a j_a \tau_a \Big| n_b l_b j_b \tau_b \Big\rangle \Big\langle l_a \frac{1}{2} j_a \Big\| \boldsymbol{\sigma} \Big\| l_b \frac{1}{2} j_b \Big\rangle \\
& \overset{(\ref{j1j2-2})}{=} g_A \Big\langle n_a l_a j_a \tau_a \Big| n_b l_b j_b \tau_b \Big\rangle \delta_{\tau_{a},\pm\frac{1}{2}}\delta_{\tau_{b},\mp\frac{1}{2}} \delta_{l_a l_b} (-)^{1+l_b+\frac{1}{2}+j_a} \hat{j}_a \hat{j}_b  \left\{\begin{array}{ccc} j_b & j_a & 1 \\ \frac{1}{2} & \frac{1}{2} & l_b \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \boldsymbol{\sigma} \Big\| \frac{1}{2} \Big\rangle \\
& \overset{(\ref{jzy-sigma})}{=} g_A \Big\langle n_a l_a j_a \tau_a \Big| n_b l_b j_b \tau_b \Big\rangle \delta_{\tau_{a},\pm\frac{1}{2}}\delta_{\tau_{b},\mp\frac{1}{2}} \delta_{l_a l_b} (-)^{l_b+\frac{3}{2}+j_a} \sqrt{6}\hat{j}_a \hat{j}_b  \left\{\begin{array}{ccc} j_b & j_a & 1 \\ \frac{1}{2} & \frac{1}{2} & l_b \end{array}\right\}
\end{align}
$$
