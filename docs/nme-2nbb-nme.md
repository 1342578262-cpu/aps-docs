---
title: 3. 2νββ 核矩阵元
citations:
  - "PhysRevC.105.044331"
  - "Wu_2025"
  - "Suhonen2013From"
---

# 2νββ 核矩阵元（Nuclear Matrix Element）

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。

对于 $2\nu\beta\beta$ 衰变的核矩阵元，由于同位旋对称性，Fermi 跃迁被强烈压低，因此计算中只考虑 GT 跃迁的核矩阵元 $M_{GT}^{2\nu}$。在 QRPA 框架下，GT 核矩阵元可表示为 $\cite{PhysRevC.105.044331,Wu_2025}$，


$$
\begin{align}
M^{2\nu} \approx M_{GT}^{2\nu} &= \sum_{if} \frac{\left\langle 0_f^+ \left\| O_{GT}^{\left(-\right)} \right\|1_f^+\right\rangle \left\langle 1_f^+|1_i^+ \right\rangle \left\langle 1_i^+ \left\| O_{GT}^{\left(-\right)} \right\|0_i^+\right\rangle}{\frac{1}{2}\left(\omega_i+\omega_f\right)}, \label{2vbetabeta}
\end{align}
$$


$$
\begin{align}
& \left\langle 0_f^+ \left| O_{GT}^{\left(-\right)} \right|1_f^+\right\rangle = \left\langle 0_f^+ \left| \left[O_{GT}^{\left(-\right)}, \mathcal{Q}_f^\dagger(JM)\right] \right|0_f^+\right\rangle \\
& \left\langle 1_i^+ \left| O_{GT}^{\left(-\right)} \right|0_i^+\right\rangle = \left\langle 0_i^+ \left| \left[\mathcal{Q}_f(JM), O_{GT}^{\left(-\right)}\right] \right|0_i^+\right\rangle
\end{align}
$$

其中，分母中的能量 $\omega_i$ 和 $\omega_f$ 分别对应于初态核和末态核相对于各自基态的激发能。

在加入 GT 两体流的贡献后，GT 算符可以写成单体流与两体流分量的和：


$$
\begin{align}
O_{GT} = O_{GT}^{1b} + O_{GT}^{2b}.
\end{align}
$$

在式(\ref{2vbetabeta})中，$\left\langle 1_f^+|1_i^+ \right\rangle$ 是重叠因子，其表达式如下：


$$
\begin{align}
\left\langle 1_f^+|1_i^+ \right\rangle &= \sum_{\pi_i\nu_i\pi_f\nu_f} \left\langle \pi_i | \pi_f \right\rangle \left\langle \nu_i | \nu_f \right\rangle \left(X_{\pi_i\nu_i}^{i}X_{\pi_f\nu_f}^{f} - Y_{\pi_i\nu_i}^{i}Y_{\pi_f\nu_f}^{f}\right) \notag \\
&\cdot& \left( u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f} \right) \left( u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f} \right) \left\langle HFB_f|HFB_i \right\rangle
\end{align}
$$


$$
\begin{align}
\left\langle HFB_f|HFB_i \right\rangle = \prod_{\pi_i\pi_f\nu_i\nu_f} \left( u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f} \right) \left( u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f} \right)
\end{align}
$$

在QRPA理论中，初态核和末态核基态激发的中间态$|1_i^+ \rangle$和$|1_f^+ \rangle$不是正交的，因此需要计算其重叠因子。下面推导重叠因子 $\left\langle 1_f^+|1_i^+ \right\rangle$：


$$
\begin{align}
&&\left\langle 1_f^+|1_i^+ \right\rangle = \left\langle 0_f^+\left|\mathcal{Q}_f(JM) \mathcal{Q}_i^\dagger(JM)\right|0_i^+ \right\rangle = \left\langle QRPA_f\left|\mathcal{Q}_f(JM) \mathcal{Q}_i^\dagger(JM)\right|QRPA_i \right\rangle \label{1f1i_1}
\end{align}
$$

将初态核的QRPA激发算符在末态核的QRPA激发算符上展开：


$$
\begin{align}
\mathcal{Q}_i^\dagger(JM) = \sum_{f} \left( a_{if}\mathcal{Q}_f^\dagger(JM)+b_{if}\tilde{\mathcal{Q}}_f(JM)\right) \label{1f1i_2}
\end{align}
$$

将公式(\ref{1f1i_2})代入公式(\ref{1f1i_1})中：


$$
\begin{align}
& \left\langle 1_f^+|1_i^+ \right\rangle = \left\langle QRPA_f\left|\mathcal{Q}_f(JM) \sum_{f} \left( a_{if}\mathcal{Q}_f^\dagger(JM)+b_{if}\tilde{\mathcal{Q}}_f(JM)\right)\right|QRPA_i \right\rangle \notag \\
& = \sum_{f} \left[\left\langle QRPA_f\left| a_{if}\mathcal{Q}_f(JM)\mathcal{Q}_f^\dagger(JM) \right|QRPA_i \right\rangle + \left\langle QRPA_f\left| b_{if}\mathcal{Q}_f(JM)\tilde{\mathcal{Q}}_f(JM) \right|QRPA_i \right\rangle\right] \notag \\
& \approx \sum_{f} a_{if} \left\langle QRPA_f|QRPA_i \right\rangle \overset{QBA}{\approx} \sum_{f} a_{if} \left\langle HFB_f|HFB_i \right\rangle
\end{align}
$$

其中，忽略掉$b_{if}$项是因为初态核的QRPA基态和由末态核的QRPA基态激发的双声子激发态之间的重叠因子很小。

初态核和末态核的粒子算符通过单粒子态重叠矩阵联系：


$$
\begin{align}
c_{\alpha}^{(i)\dagger} = \sum_{\beta} \left\langle \alpha | \beta \right\rangle c_{\beta}^{(f)\dagger}
\end{align}
$$

其中，单粒子态$|\alpha\rangle$中的好量子数包含$(n,l,j,m,\tau)$。

QRPA的激发算符表达式为：


$$
\begin{align}
\mathcal{Q}_i^\dagger(JM) = \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} A_{\pi_i\nu_i}^\dagger(JM) - Y_{\pi_i\nu_i}^{iJ} \tilde{A}_{\pi_i\nu_i}(JM) \label{QiJM}
\end{align}
$$

因此：


$$
\begin{align}
& A_{\pi_i\nu_i}^\dagger(JM) = \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} a_{\pi_i}^\dagger a_{\nu_i}^\dagger \notag \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} (u_{\pi_i}c_{\pi_i}^\dagger-v_{\pi_i}\tilde{c}_{\pi_i})(u_{\nu_i}c_{\nu_i}^\dagger-v_{\nu_i}\tilde{c}_{\nu_i}) \notag \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} \sum_{\pi_f}\left\langle \pi_i|\pi_f \right\rangle (u_{\pi_i}c_{\pi_f}^\dagger-v_{\pi_i}\tilde{c}_{\pi_f}) \sum_{\nu_f}\left\langle \nu_i|\nu_f \right\rangle (u_{\nu_i}c_{\nu_f}^\dagger-v_{\nu_i}\tilde{c}_{\nu_f}) \notag \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[u_{\pi_i}(u_{\pi_f}a_{\pi_f}^\dagger+v_{\pi_f}\tilde{a}_{\pi_f})-v_{\pi_i}(u_{\pi_f}\tilde{a}_{\pi_f}-v_{\pi_f}a_{\pi_f}^\dagger)\right] \notag \\
& \cdot \left[u_{\nu_i}(u_{\nu_f}a_{\nu_f}^\dagger+v_{\nu_f}\tilde{a}_{\nu_f})-v_{\nu_i}(u_{\nu_f}\tilde{a}_{\nu_f}-v_{\nu_f}a_{\nu_f}^\dagger)\right] \notag \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})a_{\pi_f}^\dagger+(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\tilde{a}_{\pi_f}\right] \notag \\
& \cdot \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})a_{\nu_f}^\dagger+(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\tilde{a}_{\nu_f}\right] \notag \\
= & \sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{JM} \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \notag \\
& \cdot \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})a_{\pi_f}^\dagger a_{\nu_f}^\dagger+(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\tilde{a}_{\pi_f}\tilde{a}_{\nu_f}\right] \notag \\
= & \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{JM} a_{\pi_f}^\dagger a_{\nu_f}^\dagger \right. \notag \\
& \left.+ (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\right. \notag \\
& \left.\cdot \sum_{m_{\pi_f}m_{\nu_f}} (-)^{j_{\pi_f}+j_{\nu_f}-J}C_{j_{\pi_f} -m_{\pi_f} j_{\nu_f} -m_{\nu_f}}^{J-M} (-)^{j_{\pi_f}+m_{\pi_f}}a_{-\pi_f}(-)^{j_{\nu_f}+m_{\nu_f}}a_{-\nu_f}\right] \notag \\
= & \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{JM} a_{\pi_f}^\dagger a_{\nu_f}^\dagger \right. \notag \\
& \left.+ (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \sum_{m_{\pi_f}m_{\nu_f}} (-)^{J+M}C_{j_{\pi_f} -m_{\pi_f} j_{\nu_f} -m_{\nu_f}}^{J-M} a_{-\pi_f}a_{-\nu_f}\right] \notag \\
= & \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})A_{\pi_f \nu_f}^\dagger(JM) \right. \notag \\
& \left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \tilde{A}_{\pi_f \nu_f}(JM) \right] \label{QiJM1}
\end{align}
$$

同理，


$$
\begin{align}
& \tilde{A}_{\pi_i\nu_i}(JM) = (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} a_{\nu_i} a_{\pi_i} \notag \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} (u_{\nu_i}c_{\nu_i}-v_{\nu_i}\tilde{c}_{\nu_i}^\dagger) (u_{\pi_i}c_{\pi_i}-v_{\pi_i}\tilde{c}_{\pi_i}^\dagger) \notag \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} \sum_{\nu_f}\left\langle \nu_i|\nu_f \right\rangle(u_{\nu_i}c_{\nu_f}-v_{\nu_i}\tilde{c}_{\nu_f}^\dagger) \sum_{\pi_f}\left\langle \pi_i|\pi_f \right\rangle(u_{\pi_i}c_{\pi_f}-v_{\pi_i}\tilde{c}_{\pi_f}^\dagger) \notag \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[u_{\nu_i}(u_{\nu_f}a_{\nu_f}+v_{\nu_f}\tilde{a}_{\nu_f}^\dagger)-v_{\nu_i}(u_{\nu_f}\tilde{a}_{\nu_f}^\dagger-v_{\nu_f}a_{\nu_f})\right] \notag \\
& \cdot \left[u_{\pi_i}(u_{\pi_f}a_{\pi_f}+v_{\pi_f}\tilde{a}_{\pi_f}^\dagger)-v_{\pi_i}(u_{\pi_f}\tilde{a}_{\pi_f}^\dagger-v_{\pi_f}a_{\pi_f})\right] \notag \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})a_{\nu_f}+(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\tilde{a}_{\nu_f}^\dagger\right] \notag \\
& \cdot \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})a_{\pi_f}+(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\tilde{a}_{\pi_f}^\dagger\right] \notag \\
= & (-)^{J+M} \sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{J-M} \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \notag \\
& \cdot \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})a_{\nu_f}a_{\pi_f}+(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\tilde{a}_{\nu_f}^\dagger\tilde{a}_{\pi_f}^\dagger\right] \notag \\
= & \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(-)^{J+M} \sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{J-M} a_{\nu_f}a_{\pi_f}\right. \notag \\
& \left. + (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\right. \notag \\
& \left. \cdot (-)^{J+M} \sum_{m_{\pi_f}m_{\nu_f}} (-)^{j_{\pi_f}+j_{\nu_f}-J}C_{j_{\pi_f} -m_{\pi_f} j_{\nu_f} -m_{\nu_f}}^{JM} (-)^{j_{\nu_f}+m_{\nu_f}}a_{-\nu_f}^\dagger (-)^{j_{\pi_f}+m_{\pi_f}}a_{-\pi_f}^\dagger\right] \notag \\
= & \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) \tilde{A}_{\pi_f\nu_f}(JM) \right. \notag \\
& \left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) A_{\pi_f\nu_f}^\dagger(JM) \right] \label{QiJM2}
\end{align}
$$

因为：


$$
\begin{align}
\mathcal{Q}_f^\dagger(JM) = \sum_{\pi_f\nu_f} X_{\pi_f\nu_f}^{fJ} A_{\pi_f\nu_f}^\dagger(JM) - Y_{\pi_f\nu_f}^{fJ} \tilde{A}_{\pi_f\nu_f}(JM) \label{Qfdagger}
\end{align}
$$


$$
\begin{align}
\tilde{\mathcal{Q}}_f(JM) &= (-)^{J+M} \mathcal{Q}_f(J-M) \notag \\
&= (-)^{J+M} \sum_{\pi_f\nu_f} X_{\pi_f\nu_f}^{fJ} A_{\pi_f\nu_f}(J-M) - Y_{\pi_f\nu_f}^{fJ} \tilde{A}_{\pi_f\nu_f}^\dagger(J-M) \notag \\
&= \sum_{\pi_f\nu_f} X_{\pi_f\nu_f}^{fJ} \tilde{A}_{\pi_f\nu_f}(JM) - Y_{\pi_f\nu_f}^{fJ} A_{\pi_f\nu_f}^\dagger(JM) \label{Qftilde}
\end{align}
$$

将公式(\ref{Qfdagger})和公式(\ref{Qftilde})写成矩阵的形式：


$$
\begin{align}
\left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right) = \left(\begin{array}{ll} \,\,\,X & - Y  \\  - Y & \,\,\,X \end{array}\right) \left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right)
\end{align}
$$

对其做一个幺正变换：


$$
\begin{gather}
\left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right) = \left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{ll} \,\,\,X & - Y  \\  - Y & \,\,\,X \end{array}\right) \left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right) \notag \\
\Longrightarrow \left(\begin{array}{ll} X^2-Y^2 & \,\,\,\,\,\,\,\,\,\,0  \\  \,\,\,\,\,\,\,\,\,\,0 & X^2-Y^2 \end{array}\right) \left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right) = \left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right)
\end{gather}
$$

由文献 $\cite{Suhonen2013From}$ 中(19.9)式知QRPA方程满足的正交归一性：


$$
\begin{align}
\left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right) = \left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right)
\end{align}
$$

因此：


$$
\begin{align}
A_{\pi_f\nu_f}^\dagger(JM) &= \sum_{f} X_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) + Y_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) \label{QiJM3} \\
\tilde{A}_{\pi_f\nu_f}(JM) &= \sum_{f} X_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) + Y_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) \label{QiJM4}
\end{align}
$$

联立公式(\ref{QiJM1},\ref{QiJM2},\ref{QiJM3},\ref{QiJM4})得：


$$
\begin{align}
& A_{\pi_i\nu_i}^\dagger(JM) = \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})A_{\pi_f \nu_f}^\dagger(JM) \right. \notag \\
& \left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \tilde{A}_{\pi_f \nu_f}(JM) \right] \notag \\
&= \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) + Y_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM)\right) \right. \notag \\
& \left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) + Y_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM)\right) \right]
\end{align}
$$


$$
\begin{align}
& \tilde{A}_{\pi_i\nu_i}(JM) = \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) \tilde{A}_{\pi_f\nu_f}(JM) \right. \notag \\
& \left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) A_{\pi_f\nu_f}^\dagger(JM) \right] \notag \\
&= \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) \left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) + Y_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM)\right) \right. \notag \\
& \left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) \left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) + Y_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM)\right) \right]
\end{align}
$$

所以：


$$
\begin{align}
& \mathcal{Q}_i^\dagger(JM) \approx \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} A_{\pi_i\nu_i}^\dagger(JM) - Y_{\pi_i\nu_i}^{iJ} \tilde{A}_{\pi_i\nu_i}(JM) \notag \\
= & \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})X_{\pi_f\nu_f}^{fJ} \right.\right. \notag \\
& \left.\left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) Y_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \notag \\
& - Y_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) Y_{\pi_f\nu_f}^{fJ} \right.\right. \notag \\
& \left.\left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) X_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \notag \\
\approx & \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})X_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \notag \\
& - Y_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) Y_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \notag \\
= & \sum_{f} \left( \sum_{\pi_i \nu_i \pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle (u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\left(X_{\pi_i\nu_i}^{iJ} X_{\pi_f\nu_f}^{fJ} - Y_{\pi_i\nu_i}^{iJ} Y_{\pi_f\nu_f}^{fJ}\right) \right) \mathcal{Q}_f^\dagger(JM)
\end{align}
$$

所以：


$$
\begin{align}
a_{if} = \sum_{\pi_i \nu_i \pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle (u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\left(X_{\pi_i\nu_i}^{iJ} X_{\pi_f\nu_f}^{fJ} - Y_{\pi_i\nu_i}^{iJ} Y_{\pi_f\nu_f}^{fJ}\right)
\end{align}
$$

令$c_i^{k\dagger}=c_f^{k\dagger}$,有：


$$
\begin{align}
& \left\langle HFB_f|HFB_i \right\rangle = \left\langle 0\left|\prod_{k}\left(u_f^k+v_f^k \tilde{c}_f^k c_f^k\right) \prod_{l}\left(u_i^l+v_i^l c_i^{l\dagger} \tilde{c}_i^{l\dagger}\right)\right|0 \right\rangle \notag \\
=& \left\langle 0\left|\prod_{k}\left(u_f^k+v_f^k \tilde{c}_f^k c_f^k\right) \prod_{l}\left(u_i^l+v_i^l c_f^{l\dagger} \tilde{c}_f^{l\dagger}\right)\right|0 \right\rangle \notag \\
=& \prod_{k} u_i^k u_f^k \notag \\
&+ \sum_{k_1} v_i^{k_1} v_f^{k_1} \left\langle 0\left| \tilde{c}_f^{k_1} c_f^{k_1} c_f^{k_1\dagger} \tilde{c}_f^{k_1\dagger}\right|0 \right\rangle \prod_{k\neq k_1} u_i^k u_f^k \notag \\
&+ \sum_{k_1\neq k_2} v_i^{k_1} v_f^{k_1} v_i^{k_2} v_f^{k_2} \left\langle 0\left| \tilde{c}_f^{k_1} c_f^{k_1} \tilde{c}_f^{k_2} c_f^{k_2} c_f^{k_1\dagger} \tilde{c}_f^{k_1\dagger}c_f^{k_2\dagger} \tilde{c}_f^{k_2\dagger}\right|0 \right\rangle \prod_{k\neq k_1,k_2} u_i^k u_f^k \notag \\
&+ \cdots + \prod_{k} v_i^k v_f^k \notag \\
=& \prod_{k} u_i^k u_f^k \notag \\
&+ \sum_{k_1} v_i^{k_1} v_f^{k_1} \prod_{k\neq k_1} u_i^k u_f^k \notag \\
&+ \sum_{k_1\neq k_2} v_i^{k_1} v_f^{k_1} v_i^{k_2} v_f^{k_2} \prod_{k\neq k_1,k_2} u_i^k u_f^k \notag \\
&+ \cdots + \prod_{k} v_i^k v_f^k \notag \\
=& \prod_k \left(u_i^k u_f^k + v_i^k v_f^k\right)
\end{align}
$$
