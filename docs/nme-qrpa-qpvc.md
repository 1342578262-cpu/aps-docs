# 跃迁矩阵元：QRPA + QPVC

> 本页由 LaTeX 笔记转换而来，公式较多，可在宽屏下阅读或横向滚动查看。


## 1. Basis Expansion（基展开）

In order to derive the two-body matrix elements of the two-body currents operator, we need to transform the absolute coordinate system representing the single-particle wave function into the Jacobi coordinate system (Moshinsky Transformation). However, the single-particle wave function obtained from our program is a function related to the coordinate space, so it is necessary to use the basis expansion method to project it onto the spherical harmonic oscillator basis.

For two-particle systerms, define the $\psi_{n_a l_a j_a m_a \tau_a}(\bmr) = \sum\limits_{n l j m} c_{nljm}^{n_a l_a j_a m_a \tau_a} \phi_{nljm}(\bmr)$, $\phi_{nljm}(\bmr)$ is the Harmonic Oscillator Wave Function.


$$
\begin{aligned}
|\psi\rangle &= \sum_{i} |\phi_i\rangle \langle\phi_i| \cdot |\psi\rangle \\
&= \sum_{i} \int_{\bmr^{\prime}}\int_{\bmr^{\prime\prime}} |\bmr^{\prime\prime} \rangle \langle \bmr^{\prime\prime} |\phi_i\rangle \langle \phi_i|\bmr^{\prime}\rangle \langle \bmr^{\prime}|\psi\rangle \\
&= \sum_{i} \int_{\bmr^{\prime}}\int_{\bmr^{\prime\prime}} |\bmr^{\prime\prime} \rangle \phi_i(\bmr^{\prime\prime}) \phi_i^\dagger(\bmr^{\prime}) \psi(\bmr^{\prime})
\end{aligned}
$$

Left multiply by $\langle \bmr|$ in above equation


$$
\begin{aligned}
\langle \bmr|\psi\rangle = \sum_{i} \int_{\bmr^{\prime}}\int_{\bmr^{\prime\prime}} \langle \bmr|\bmr^{\prime\prime} \rangle \phi_i(\bmr^{\prime\prime}) \phi_i^\dagger(\bmr^{\prime}) \psi(\bmr^{\prime})
\end{aligned}
$$

so we can get


$$
\begin{aligned}
& \psi_j(\bmr) = \sum_{i} {\color{red} \int_{\bmr^\prime} \phi_i^\dagger(\bmr^{\prime}) \psi_j(\bmr^{\prime})} \phi_i(\bmr) = \psi_{n_j l_j j_j m_j \tau_j}(\bmr) = \sum_{i} {\color{red} c_i^j} \phi_i(\bmr) \\
&= \sum_{n_i l_i j_i m_i} {\color{red} \int_{\bmr^\prime} \phi_{n_i l_i j_i m_i}^\dagger(\bmr^{\prime}) \psi_{n_j l_j j_j m_j \tau_j}(\bmr^{\prime})} \phi_{n_i l_i j_i m_i}(\bmr) = \sum_{n_i l_i j_i m_i} {\color{red} c_{n_i l_i j_i m_i}^{n_j l_j j_j m_j \tau_j}} \phi_{n_i l_i j_i m_i}(\bmr) \\
&= \sum_{n_i l_i j_i m_i} {\color{red} \int_{\bmr^\prime} \Big( \eta_i g_{n_i l_i}(r^\prime)\sum_{m_{l_i}m_{s_i}}C_{l_i m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} Y_{l_i m_{l_i}}(\hat{\bmr^\prime}) \chi_{\frac{1}{2} m_{s_i}} \chi_{\frac{1}{2} m_{\tau_i}} \Big)^{\!\dagger}} \\
&\ol {\color{red}\cdot\Big( \eta_j u_{n_j l_j \tau_j}(r^\prime)\sum_{m_{l_j}m_{s_j}}C_{l_j m_{l_j} \frac{1}{2} m_{s_j}}^{j_j m_j} Y_{l_j m_{l_j}}(\hat{\bmr^\prime}) \chi_{\frac{1}{2} m_{s_j}} \chi_{\frac{1}{2} m_{\tau_j}} \Big)d\bmr^\prime} \phi_{n_i l_i j_i m_i}(\bmr) \\
&= \sum_{n_i l_i j_i m_i} {\color{red} \sum_{m_{l_i}m_{s_i}m_{l_j}m_{s_j}} \eta_i^\ast \eta_j C_{l_i m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} C_{l_j m_{l_j} \frac{1}{2} m_{s_j}}^{j_j m_j} \int_{r^\prime} g^\ast_{n_i l_i}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime} \\
&\ol {\color{red}\int_{\hat{{\bmr}^\prime}}Y^\ast_{l_i m_{l_i}}(\hat{\bmr^\prime}) Y_{l_j m_{l_j}}(\hat{\bmr^\prime})d\hat{\bmr^\prime} \chi^\dagger_{\frac{1}{2} m_{s_i}} \chi_{\frac{1}{2} m_{s_j}} \chi^\dagger_{\frac{1}{2} m_{\tau_i}} \chi_{\frac{1}{2} m_{\tau_j}} } \phi_{n_i l_i j_i m_i}(\bmr) \\
&\ii= \sum_{n_i l_i j_i m_i} {\color{red} \sum_{m_{l_i}m_{s_i}m_{l_j}m_{s_j}}\eta_i^\ast \eta_j C_{l_i m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} C_{l_j m_{l_j} \frac{1}{2} m_{s_j}}^{j_j m_j} \int_{r^\prime} g^\ast_{n_i l_i}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{l_i l_j}\delta_{m_{l_i}m_{l_j}} \delta_{m_{s_i} m_{s_j}}\delta_{m_{\tau_i} m_{\tau_j}} } \phi_{n_i l_i j_i m_i}(\bmr) \\
&= \sum_{n_i j_i m_i} {\color{red} \sum_{m_{l_i}m_{s_i}} |\eta_j|^2  C_{l_j m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} C_{l_j m_{l_i} \frac{1}{2} m_{s_i}}^{j_j m_j} \int_{r^\prime} g^\ast_{n_i l_j}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{m_{\tau_i} m_{\tau_j}}} \phi_{n_i l_j j_i m_i}(\bmr) \\
&= \sum_{n_i j_i m_i} {\color{red} \delta_{j_i j_j}\delta_{m_i m_j} \int_{r^\prime} g^\ast_{n_i l_j}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{m_{\tau_i} m_{\tau_j}}} \phi_{n_i l_j j_i m_i}(\bmr) \\
&= \sum_{n_i} {\color{red} \int_{r^\prime} g^\ast_{n_i l_j}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{m_{\tau_i} m_{\tau_j}}} \phi_{n_i l_j j_j m_j}(\bmr)
\end{aligned}
$$

For any one-body matrix element, we can use the following method to derive and calculate it.


$$
\begin{aligned}
& \langle \bar{a} \| \mathcal{M}_{1b}^{\lambda} \| \bar{b} \rangle = \Big\langle n_a l_a j_a \tau_a \Big\| \mathcal{M}_{1b}^{\lambda} \Big\| n_b l_b j_b \tau_{b} \Big\rangle \\
&\il = \frac{\hat{j}_a}{C_{j_b m_b 1 \mu}^{j_a m_a}} \Big\langle n_a l_a j_a m_a \tau_a \Big| \mathcal{M}_{1b}^{\lambda \mu} \Big| n_b l_b j_b m_b \tau_{b} \Big\rangle \\
&\il = \sum_{n_1 n_2} c_{n_1}^{n_{a}} c_{n_2}^{n_{b}} \frac{\hat{j}_a}{C_{j_b m_b 1 \mu}^{j_a m_a}} \Big\langle n_1 l_a j_a m_a \tau_a \Big| \mathcal{M}_{1b}^{\lambda \mu} \Big| n_2 l_b j_b m_b \tau_{b} \Big\rangle \\
&\il = \sum_{n_1 n_2} c_{n_1}^{n_{a}} c_{n_2}^{n_{b}} \Big\langle n_1 l_a j_a \tau_a \Big\| \mathcal{M}_{1b}^{\lambda} \Big\| n_2 l_b j_b \tau_{b} \Big\rangle
\end{aligned}
$$

For any two-body matrix element, we can use the following method to derive and calculate it.


$$
\begin{aligned}
& \Big\langle \bar{a} \bar{\ap} \Big\|^{J_{a\ap}} \mathcal{M}_{2b}^{\lambda} \Big\| \bar{b} \bar{\bp} \Big\rangle^{J_{b\bp}} = \Big\langle n_a l_a j_a \tau_a, n_{\ap} l_{\ap} j_{\ap} \tau_{\ap} \Big\|^{J_{a\ap}} \mathcal{M}_{2b}^{\lambda} \Big\| n_b l_b j_b \tau_{b}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{b\bp}} \\
&\il = \frac{\hat{J}_{a\ap}}{C_{J_{b\bp} M_{b\bp} \lambda \mu}^{J_{a\ap} M_{a\ap}}} \Big\langle n_a l_a j_a \tau_a, n_{\ap} l_{\ap} j_{\ap} \tau_{\ap} \Big|^{J_{a\ap} M_{a\ap}} \mathcal{M}_{2b}^{\lambda \mu} \Big| n_b l_b j_b \tau_{b}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{b\bp} M_{b\bp}} \\
&\il = \frac{\hat{J}_{a\ap}}{C_{J_{b\bp} M_{b\bp} \lambda \mu}^{J_{a\ap} M_{a\ap}}} \sum_{m_a m_{\ap} m_b m_{\bp}} \!\!\!C_{j_a m_a j_{\ap} m_{\ap}}^{J_{a\ap} M_{a\ap}} C_{j_b m_b j_{\bp} m_{\bp}}^{J_{b\bp} M_{b\bp}} \Big\langle n_a l_a j_a m_a \tau_a, n_{\ap} l_{\ap} j_{\ap} m_{\ap} \tau_{\ap} \Big| \mathcal{M}_{2b}^{\lambda \mu} \Big| n_b l_b j_b m_b \tau_{b}, n_{\bp} l_{\bp} j_{\bp} m_{\bp} \tau_{\bp} \Big\rangle \\
&\il = \sum_{n_1 n_2 n_3 n_4} c_{n_1}^{n_{a}} c_{n_2}^{n_{\ap}} c_{n_3}^{n_{b}} c_{n_4}^{n_{\bp}} \frac{\hat{J}_{a\ap}}{C_{J_{b\bp} M_{b\bp} \lambda \mu}^{J_{a\ap} M_{a\ap}}} \sum_{m_a m_{\ap} m_b m_{\bp}} C_{j_a m_a j_{\ap} m_{\ap}}^{J_{a\ap} M_{a\ap}} C_{j_b m_b j_{\bp} m_{\bp}}^{J_{b\bp} M_{b\bp}} \\
& \cdot \Big\langle n_1 l_a j_a m_a \tau_a, n_2 l_{\ap} j_{\ap} m_{\ap} \tau_{\ap} \Big| \mathcal{M}_{2b}^{\lambda \mu} \Big| n_3 l_b j_b m_b \tau_{b}, n_4 l_{\bp} j_{\bp} m_{\bp} \tau_{\bp} \Big\rangle \\
&\il = \sum_{n_1 n_2 n_3 n_4} c_{n_1}^{n_{a}} c_{n_2}^{n_{\ap}} c_{n_3}^{n_{b}} c_{n_4}^{n_{\bp}} \Big\langle n_1 l_a j_a \tau_a, n_2 l_{\ap} j_{\ap} \tau_{\ap} \Big\|^{J_{a\ap}} \mathcal{M}_{2b}^{\lambda} \Big\| n_3 l_b j_b \tau_{b}, n_4 l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{b\bp}}
\end{aligned}
$$


## 2. GT 算符约化矩阵元的推导（Derivation of Reduced Matrix Element of Gamow-Teller Operator）

The form of the atomic transition matrix element in beta decay[9],


$$
\begin{aligned}
\langle F| H_{\beta}|I\rangle=-\frac{G_{\beta}}{\sqrt{2}} l^{\mu} \int d^{3} x\langle f| e^{-i \bm{q} \cdot \boldsymbol{x}} \mathbb{J}_{\mu}(\boldsymbol{x})|i\rangle .
\end{aligned}
$$

The form of the nuclear transition matrix element is


$$
\begin{aligned}
\langle 1_\nu^+|\mathbb{M}^{\lambda\mu}|0^+\rangle = \int d^{3} x\langle 1_\nu^+| e^{-i \bm{q} \cdot \boldsymbol{x}} \mathbb{J}_{\mu}(\boldsymbol{x})|0^+\rangle = \int d^{3} x\langle 1_\nu^+| \mathbb{J}_{\mu}(\boldsymbol{x})|0^+\rangle.
\end{aligned}
$$

where，


$$
\begin{aligned}
\mathbb{J}_{\mu}(\boldsymbol{x}) = \mathbb{J}_{1b}(\boldsymbol{x}) + \mathbb{J}_{2b}(\boldsymbol{x})
\end{aligned}
$$

The following reduced matrix elements are all derived in the spherical harmonic oscillator basis.


### The reduced matrix element of the GT one-body current operator

The one-body current operator is


$$
\begin{aligned}
\mathbb{J}_{1 b}(\boldsymbol{x}) = -g_A\sum_{i}^{A} \bm{\sigma}_i \bm{\tau}_i^{\pm} \delta(\bm{x} - \bmr_k).
\end{aligned}
$$

The resulting reduced matrix element is given by：


$$
\begin{aligned}
& \Big\langle n_a l_a j_a \tau_a \Big\| g_A \bm{\sigma} \bm{\tau}^{\pm} \Big\| n_b l_b j_b \tau_b \Big\rangle \\
&\il = g_A \delta_{\tau_{a},\pm\frac{1}{2}}\delta_{\tau_{b},\mp\frac{1}{2}} \Big\langle n_a l_a j_a \tau_a \Big| n_b l_b j_b \tau_b \Big\rangle \Big\langle l_a \frac{1}{2} j_a \Big\| \bm{\sigma} \Big\| l_b \frac{1}{2} j_b \Big\rangle \\
&\il \overset{(A-11)}{=} g_A \Big\langle n_a l_a j_a \tau_a \Big| n_b l_b j_b \tau_b \Big\rangle \delta_{\tau_{a},\pm\frac{1}{2}}\delta_{\tau_{b},\mp\frac{1}{2}} \delta_{l_a l_b} (-)^{1+l_b+\frac{1}{2}+j_a} \hat{j}_a \hat{j}_b  \left\{\begin{array}{ccc} j_b & j_a & 1 \\ \frac{1}{2} & \frac{1}{2} & l_b \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \bm{\sigma} \Big\| \frac{1}{2} \Big\rangle \\
&\il \overset{(A-3)}{=} g_A \Big\langle n_a l_a j_a \tau_a \Big| n_b l_b j_b \tau_b \Big\rangle \delta_{\tau_{a},\pm\frac{1}{2}}\delta_{\tau_{b},\mp\frac{1}{2}} \delta_{l_a l_b} (-)^{l_b+\frac{3}{2}+j_a} \sqrt{6}\hat{j}_a \hat{j}_b  \left\{\begin{array}{ccc} j_b & j_a & 1 \\ \frac{1}{2} & \frac{1}{2} & l_b \end{array}\right\}
\end{aligned}
$$


### The reduced matrix element of the GT two-body currents operator

The two-body currents operator is[11]


$$
\begin{aligned}
\mathbb{J}_{2 b}(\boldsymbol{x})=\sum_{k<l}^{A} \boldsymbol{J}_{\boldsymbol{k} l}(\boldsymbol{x})=\frac{1}{2} \sum_{k \neq l}^{A} \boldsymbol{J}_{\boldsymbol{k} \boldsymbol{l}}(\boldsymbol{x})
\end{aligned}
$$


$$
\begin{aligned}
&\ii\!\!\! \bm{J}_{kl}(x) = \frac{2c_3g_A}{m_N F_{\pi}^2} \bigg\{ m_{\pi}^2 \left[ \left( \frac{\bm{\sigma}_l}{3} - \bm{\sigma}_l \cdot \hat{\bmr}\, \hat{\bmr} \right) Y_2(r) - \frac{\bm{\sigma}_l}{3} Y_0(r) \right] + \frac{\bm{\sigma}_l}{3} \delta(\bmr) \bigg\} \bm{\tau}_l^{\pm} \delta(\bm{x} - \bmr_k) + (k \leftrightarrow l)  \\
&\il\!\!\! \quad + \left( c_4 + \frac{1}{4} \right) \frac{g_A}{2m_N F_{\pi}^2} \bigg\{ m_{\pi}^2 \left[ \left( \frac{\bm{\sigma}_\times}{3} - \bm{\sigma}_k \times \hat{\bmr}\, \bm{\sigma}_l \cdot \hat{\bmr} \right) Y_2(r) - \frac{\bm{\sigma}_\times}{3} Y_0(r) \right] + \frac{\bm{\sigma}_\times}{3} \delta(\bmr) \bigg\} \bm{\tau}_\times^{\pm} \delta(\bm{x} - \bmr_k) + (k \leftrightarrow l)  \\
&\il\!\!\! \quad + \frac{ig_A}{8m_N F_{\pi}^2} \bm{\tau}_\times^{\pm} \Bigg[ \bm{\sigma}_l \cdot \hat{\bmr}\, \hat{\bmr} \, m_{\pi}^2 \left( 1 + \frac{2}{m_{\pi}r} + \frac{2}{m_{\pi}^2 r^2} \right) Y_0(r) + \frac{\bm{\sigma}_l \cdot \hat{\bmr}\,\hat{\bmr}}{r^2} Y_1(r) - \frac{\bm{\sigma}_l}{r^2} Y_1(r) \Bigg] \delta(\bm{x} - \bmr_k) + (k \leftrightarrow l)  \\
&\il\!\!\! \quad - \frac{g_A}{4m_N F_{\pi}^2} \Big[ 2 d_1 (\bm{\sigma}_k \bm{\tau}_k^{\pm} + \bm{\sigma}_l \bm{\tau}_l^{\pm}) + d_2 \bm{\sigma}_\times \bm{\tau}_\times^{\pm} \Big] \delta(\bmr) \delta(\bm{x} - \bmr_k)
\end{aligned}
$$

where，


$$
\begin{gathered}
c_i = m_N \bar{c}_i \,\,, \ol d_i = \frac{m_N F_\pi^2}{g_A} \bar{d}_i \,\, \\
m_\pi = 139.57 \,\,MeV, \ol F_\pi = 92.4 \,\,MeV \\
\bmr=(\bmr_k-\bmr_l),\, \bm{\sigma}_\times=\bm{\sigma}_k \times \bm{\sigma}_l,\, \bm{\tau}_\times^{\pm}=(\bm{\tau}_k \times \bm{\tau}_l)^{\pm} \\
Y_0(r) = \frac{e^{-m_\pi r}}{4\pi r}\ol[fm^{-1}] \\
Y_1(r) = -r\frac{\partial}{\partial r} Y_0(r) = (m_\pi r + 1) Y_0(r) \ol[fm^{-1}] \\
Y_2(r) = \frac{1}{m_\pi^2} r \frac{\partial}{\partial r} \frac{1}{r} \frac{\partial}{\partial r} Y_0(r) = \big( 1 + \frac{3}{m_\pi r} +  \frac{3}{m_\pi^2 r^2} \big) Y_0(r) \ol[fm^{-1}]
\end{gathered}
$$

**Term $[01A_1]$：**( Note：The variable $r$ in $Y_2(r)$ and $Y_2(\sqrt{2}r)$ represents distinct quantities and please distinguish between them. The same applies to all other terms.)


$$
\begin{aligned}
&\ii [01A_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l\, Y_2(r) \bm{\tau}_l^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \Big\langle n_a l_a j_a, n_b l_b j_b \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \bm{\sigma}_l\big]^1 \Big\| n_{\ap} l_{\ap} j_{\ap}, n_{\bp} l_{\bp} j_{\bp} \Big\rangle^{J_{\ap \bp}} \big\langle \tau_a\tau_b \big|\bm{\tau}_l^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \overset{(A-4)}{=} \big\langle \tau_a\tau_b \big|\bm{\tau}_l^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \bm{\sigma}_l\big]^1 \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(A-6)}{\overset{(A-5)}{=}} \big\langle \tau_a\tau_b \big|\bm{\tau}_l^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \bm{\sigma}_l\big]^1 \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(A-1)}{\overset{(A-8)}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} \,\,\,0 & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp} \delta_{L_{ab}L_{\ap\bp}}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}   \\
& \cdot \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \underset{(B-1)}{\overset{(B-3)}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp} \delta_{L_{ab}L_{\ap\bp}}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}   \\
& \cdot (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}\delta_{L_{ab}L_{\ap\bp}}  \hat{L}_{ab} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle \\
&\il = \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code:(101)


$$
\begin{aligned}
&\il {\color{red} [01A_1]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1+J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[02B_1]$：**


$$
\begin{aligned}
&\ii [02B_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l\cdot\hat{\bmr}\,\hat{\bmr}\, Y_2(r) \bm{\tau}_l^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(A-6)}{\overset{(A-4)(A-5)}{=}} \big\langle \tau_a\tau_b \big|\bm{\tau}_l^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \bm{\sigma}_l\cdot\hat{\bmr}\,\hat{\bmr}\, Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(B-4)}{\overset{(A-1)}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h}  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[ \bm{\sigma}_l \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h \big]^1 Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \overset{(A-9)}{=} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h}  \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\bmr} \otimes \hat{\bmr}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \underset{(B-1)}{\overset{(B-6)}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h}  \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \\
& \cdot \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L+l^\prime+L_{ab}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& = \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1} \sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

In the code：(102)


$$
\begin{aligned}
&\il {\color{red} [02B_1]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{m_N F_{\pi}^2} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

**Term $[03C_1]$：**(The derivation follows the same method as Term $[01A_1]$)


$$
\begin{aligned}
&\ii [03C_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l Y_0(r) \bm{\tau}_l^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(103)


$$
\begin{aligned}
&\il {\color{red} [03C_1]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[04D_1]$：**


$$
\begin{aligned}
&\ii [04D_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l \,\delta(\bmr) \bm{\tau}_l^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il \overset{(A-4)}{=} \big\langle \tau_a\tau_b \big|\bm{\tau}_l^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} [\delta(\bmr) \otimes \bm{\sigma}_l]^1 \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(A-1)}{\overset{(A-8)}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} 0 & 1 & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\bmr) \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle  \\
& \cdot \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}\delta_{L_{ab}L_{\ap\bp}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\bmr) \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle  \\
&\il \underset{(B-8)}{\overset{(B-1)}{=}} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}\delta_{L_{ab}L_{\ap\bp}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}\\
& \cdot \sum_{l=0}^\infty (-)^{l_{\ap}+l_b+L_{ab}}\frac{1}{4\pi}\delta_{L_{ab}L_{\ap\bp}}\,\hat{l}^{\,2}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{L}_{ab}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \\
&\il = \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1+J_{ab}+l_{\ap}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(104)


$$
\begin{aligned}
&\il {\color{red} [04D_1]} = \frac{c_3g_A}{\sqrt{6}\pi m_N F_{\pi}^2} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1+J_{ab}+l_{\ap}+l_b}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

**Term $[05E_1]$：**


$$
\begin{aligned}
&\ii [05E_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times Y_2(r) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \Big\langle n_a l_a j_a, n_b l_b j_b \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \bm{\sigma}_\times\big]^1 \Big\| n_{\ap} l_{\ap} j_{\ap}, n_{\bp} l_{\bp} j_{\bp} \Big\rangle^{J_{\ap \bp}} \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{(A-6)}{\overset{(A-4)(A-5)}{=}} \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[Y_2(\sqrt{2}r) \otimes \bm{\sigma}_\times\big]^1 \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(B-9)P357(2)}{\overset{(A-8)\text{[1]}}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp} \delta_{L_{ab}L_{\ap\bp}}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}   \\
& \cdot \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_\times \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle  \\
&\il \underset{(B-11)}{\overset{(B-3)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp} \delta_{L_{ab}L_{\ap\bp}}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}   \\
& \cdot (-6\sqrt{6}i) \hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}\delta_{L_{ab}L_{\ap\bp}}  \hat{L}_{ab} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle \\
&\il = (-)^{1+J_{ab}}\,24\sqrt{6}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(105)


$$
\begin{aligned}
&\il {\color{red} [05E_1]} = \Big(c_4+\frac{1}{4}\Big)\frac{4\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} (-)^{1+J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[06F_1]$：**


$$
\begin{aligned}
&\ii [06F_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k \times \hat{\bmr}\, \bm{\sigma}_l \cdot \hat{\bmr}\, Y_2(r) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(A-6)}{\overset{(A-4)(A-5)}{=}} \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \bm{\sigma}_k \times \hat{\bmr}\, \bm{\sigma}_l \cdot \hat{\bmr}\, Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(B-9)}{\overset{(B-12)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \sqrt{2}i \sum_{g,h=0}^2 \hat{g}\,\hat{h}\, (-)^{h+1}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}   \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[[\bm{\sigma}_k \otimes \bm{\sigma}_l]^g \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h\big]^1\, Y_2(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \overset{(A-9)}{=} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \sqrt{2}i \sum_{g,h=0}^2 \hat{g}\,\hat{h}\, (-)^{h+1}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}   \\
& \cdot (-)^{g+h+1}\sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| [\bm{\sigma}_k \otimes \bm{\sigma}_l]^g \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\bmr} \otimes \hat{\bmr}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \underset{(B-6)}{\overset{(B-13)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \sqrt{2}i \sum_{g,h=0}^2 \hat{g}\,\hat{h}\, (-)^{h+1}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}   \\
& \cdot (-)^{g+h+1}\sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  6\hat{g}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\} \\
& \cdot \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l^\prime+L^\prime+L_{ab}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
&\il = (-)^{1} 24\sqrt{6} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime}\Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& \cdot \sum_{g,h=0}^2 (-)^{g+h} \hat{g}^2\,\hat{h}\,  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}
\end{aligned}
$$

In the code：(106)


$$
\begin{aligned}
&\il {\color{red} [06F_1]} = \Big(c_4+\frac{1}{4}\Big)\frac{12\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime}\Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& \cdot \sum_{g,h=0}^2 (-)^{g+h} \hat{g}^2\,\hat{h}\,  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}
\end{aligned}
$$

**Term $[07G_1]$：**(The derivation follows the same method as Term $[05E_1]$)


$$
\begin{aligned}
&\ii [07G_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times \,Y_0(r) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = (-)^{1+J_{ab}}\,24\sqrt{6}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(107)


$$
\begin{aligned}
&\il {\color{red} [07G_1]} = \Big(c_4+\frac{1}{4}\Big)\frac{4\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} (-)^{J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[08H_1]$：**


$$
\begin{aligned}
&\ii [08H_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times \,\delta(\bmr) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il \overset{(A-4)}{=} \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} [\delta(\bmr) \otimes \bm{\sigma}_\times]^1 \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(B-9)}{\overset{(A-8)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} 0 & 1 & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\bmr) \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle  \\
& \cdot \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_\times \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}\delta_{L_{ab}L_{\ap\bp}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \\
& \cdot \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\bmr) \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_\times \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
&\il \underset{(B-11)}{\overset{(B-8)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}(-)^{1+L_{ab}+S_{\ap\bp}+J_{ab}}\frac{1}{\sqrt{3}\hat{L}_{ab}}\delta_{L_{ab}L_{\ap\bp}}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty (-)^{l_{\ap}+l_b+L_{ab}}\frac{1}{4\pi}\delta_{L_{ab}L_{\ap\bp}}\,\hat{l}^{\,2}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{L}_{ab}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \\
& \cdot (-6\sqrt{6})i \hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\} \\
&\il = \frac{6\sqrt{6}}{\pi} (-)^{1+l_{\ap}+l_b+J_{ab}} \hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(108)


$$
\begin{aligned}
&\il {\color{red} [08H_1]} = \Big(c_4+\frac{1}{4}\Big) \frac{\sqrt{6}g_A}{\pi m_N F_{\pi}^2} (-)^{1+l_{\ap}+l_b+J_{ab}} \hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

**Term $[09I_1]$：**(The derivation follows the same methodology as Term $[04D_1]$)


$$
\begin{aligned}
&\ii [09I_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l \,\delta(\bmr) \bm{\tau}_l^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{1+J_{ab}+l_{\ap}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(109)


$$
\begin{aligned}
&\il {\color{red} [09I_1]} = \frac{\sqrt{6}d_1 g_A}{8\pi m_N F_{\pi}^2} \delta_{\tau_a \tau_{\ap}}\delta_{\tau_b, -\frac{1}{2}}\delta_{\tau_{\bp}, \frac{1}{2}} (-)^{J_{ab}+l_{\ap}+l_b}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}+S_{ab}}\hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

**Term $[09I_2]$：**(This term corresponds to the exchange term of $[09I_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [09I_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k \,\delta(\bmr) \bm{\tau}_k^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1+J_{ab}+l_{\ap}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(110)


$$
\begin{aligned}
&\il {\color{red} [09I_2]} = \frac{\sqrt{6}d_1 g_A}{8\pi m_N F_{\pi}^2} \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{J_{ab}+l_{\ap}+l_b}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

**Term $[10J_1]$：**(This term corresponds to the exchange term of $[08H_1]$)


$$
\begin{aligned}
&\ii [10J_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times \,\delta(\bmr) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \frac{6\sqrt{6}}{\pi} (-)^{1+l_{\ap}+l_b+J_{ab}} \hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(111)


$$
\begin{aligned}
&\il {\color{red} [10J_1]} = \frac{3\sqrt{6}d_2 g_A}{2\pi m_N F_{\pi}^2} (-)^{l_{\ap}+l_b+J_{ab}} \hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

**Term $[01A_2]$：**(This term corresponds to the exchange term of $[01A_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [01A_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k\, Y_2(r) \bm{\tau}_k^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(112)


$$
\begin{aligned}
&\il {\color{red} [01A_2]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1+J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[02B_2]$：**(This term corresponds to the exchange term of $[02B_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [02B_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k\cdot\hat{\bmr}\,\hat{\bmr}\, Y_2(r) \bm{\tau}_k^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
& = \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1} \sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

In the code：(113)


$$
\begin{aligned}
&\il {\color{red} [02B_2]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{m_N F_{\pi}^2} \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

**Term $[03C_2]$：**(This term corresponds to the exchange term of $[03C_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [03C_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k Y_0(r) \bm{\tau}_k^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1+J_{ab}}\sqrt{6}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(114)


$$
\begin{aligned}
&\il {\color{red} [03C_2]}= \frac{2\sqrt{6}c_3g_A m_\pi^2}{3m_N F_{\pi}^2} \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{J_{ab}}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[04D_2]$：**(This term corresponds to the exchange term of $[04D_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [04D_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k \,\delta(\bmr) \bm{\tau}_k^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1+J_{ab}+l_{\ap}+l_b}\frac{\sqrt{6}}{4\pi}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(115)


$$
\begin{aligned}
&\il {\color{red} [04D_2]} = \frac{c_3g_A}{\sqrt{6}\pi m_N F_{\pi}^2} \delta_{\tau_b \tau_{\bp}}\delta_{\tau_a, -\frac{1}{2}}\delta_{\tau_{\ap}, \frac{1}{2}} (-)^{1+J_{ab}+l_{\ap}+l_b}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}    \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

**Term $[05E_2]$：**(This term corresponds to the exchange term of $[05E_1]$ $(k \longleftrightarrow l)$，and $[05E_2]=[05E_1]$)


$$
\begin{aligned}
&\ii [05E_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times Y_2(r) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = (-)^{1+J_{ab}}\,24\sqrt{6}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(116)


$$
\begin{aligned}
&\il {\color{red} [05E_2]} = \Big(c_4+\frac{1}{4}\Big)\frac{4\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} (-)^{1+J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[06F_2]$：**(This term corresponds to the exchange term of $[06F_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [06F_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l \times \hat{\bmr}\, \bm{\sigma}_k \cdot \hat{\bmr}\, Y_2(r) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = (-)^{1} 24\sqrt{6} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime}\Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& \cdot \sum_{g,h=0}^2 (-)^{g+1}(-)^{g+h} \hat{g}^2\,\hat{h}\,  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}
\end{aligned}
$$

In the code：(117)


$$
\begin{aligned}
&\il {\color{red} [06F_2]} = \Big(c_4+\frac{1}{4}\Big)\frac{12\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime}\Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& \cdot \sum_{g,h=0}^2 (-)^{g+1}(-)^{g+h} \hat{g}^2\,\hat{h}\,  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}  \left\{\begin{array}{ccc} h & g & 1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}
\end{aligned}
$$

**Term $[07G_2]$：**(This term corresponds to the exchange term of $[07G_1]$ $(k \longleftrightarrow l)$，and $[07G_2]=[07G_1]$)


$$
\begin{aligned}
&\ii [07G_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times \,Y_0(r) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = (-)^{1+J_{ab}}\,24\sqrt{6}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：(118)


$$
\begin{aligned}
&\il {\color{red} [07G_2]} = \Big(c_4+\frac{1}{4}\Big)\frac{4\sqrt{6}g_A m_\pi^2}{m_N F_\pi^2} (-)^{J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \Big\langle \underbrace{n l}_{r} \Big| Y_0(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[08H_2]$：**(This term corresponds to the exchange term of $[08H_1]$ $(k \longleftrightarrow l)$，and $[08H_2]=[08H_1]$)


$$
\begin{aligned}
&\ii [08H_2] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_\times \,\delta(\bmr) \bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \frac{6\sqrt{6}}{\pi} (-)^{1+l_{\ap}+l_b+J_{ab}} \hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

In the code：(119)


$$
\begin{aligned}
&\il {\color{red} [08H_2]} = \Big(c_4+\frac{1}{4}\Big) \frac{\sqrt{6}g_A}{\pi m_N F_{\pi}^2} (-)^{1+l_{\ap}+l_b+J_{ab}} \hat{l}_{\ap}\hat{l}_{\bp}\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\}  \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \sum_{l=0}^\infty \,\hat{l}^{\,2}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}
\end{aligned}
$$

The following operator represents a momentum-dependent term, which yields relatively minor contributions.

**Term $[11k_1]$：**


$$
\begin{aligned}
&\ii [11k_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l\cdot\hat{\bmr}\,\hat{\bmr} \,\Big(1+\frac{2}{m_\pi r}+\frac{2}{m_\pi^2 r^2}\Big)Y_0(r)\bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(A-6)}{\overset{(A-4)(A-5)}{=}} \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}}  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \bm{\sigma}_l\cdot\hat{\bmr}\,\hat{\bmr}\, \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \underset{(B-4)}{\overset{(B-9)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h}  \\
&\ii \cdot \Big\langle [N L \otimes n l]^{L_{ab}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\|^{J_{ab}} \big[ \bm{\sigma}_l \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h \big]^1 \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle^{J_{\ap \bp}} \\
&\il \overset{(A-9)}{=} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h}  \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle  \\
& \cdot \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) [\hat{\bmr} \otimes \hat{\bmr}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \underset{(B-1)}{\overset{(B-6)}{=}} 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} \hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{L}_{ab}\hat{S}_{ab}\hat{L}_{\ap\bp}\hat{S}_{\ap\bp}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime l^\prime N^\prime L^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N^\prime L^\prime, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N^\prime+L^\prime+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h}  \\
& \cdot (-)^{h}\sqrt{3}\hat{J}_{ab}\hat{J}_{\ap\bp}  \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \\
& \cdot \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l^\prime+L^\prime+L_{ab}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \\
& \cdot \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{1} 4\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

In the code：


$$
\begin{aligned}
&\il {\color{red} [11k_1]} = \frac{\sqrt{6}\, g_A m_\pi^2}{2m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

**Term $[12L_1]$：**(The derivation follows the same method as Term $[11K_1]$)


$$
\begin{aligned}
&\ii [12L_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l\cdot\hat{\bmr}\,\hat{\bmr} \, \frac{1}{r^2}Y_1(r)\bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{1} 2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

In the code：


$$
\begin{aligned}
&\il {\color{red} [12L_1]} = \frac{\sqrt{6}\, g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) \,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

**Term $[13M_1]$：**(The derivation follows the same method as Term $[01A_1]$)


$$
\begin{aligned}
&\ii [13M_1] = \Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_l\frac{1}{r^2}Y_1(r)\bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{1+J_{ab}}\,2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
&\!\!\!\!\! \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：


$$
\begin{aligned}
&\il {\color{red} [13M_1]} = \frac{\sqrt{6}\,g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{1+J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
&\!\!\!\!\! \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}+S_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

**Term $[11k_2]$：**(This term corresponds to the exchange term of $[11k_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [11k_2] = -\Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k\cdot\hat{\bmr}\,\hat{\bmr} \,\Big(1+\frac{2}{m_\pi r}+\frac{2}{m_\pi^2 r^2}\Big)Y_0(r)\bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) 4\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
&\! \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

In the code：


$$
\begin{aligned}
&\il {\color{red} [11k_2]} = \frac{\sqrt{6}\, g_A m_\pi^2}{2m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{1} \,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
&\! \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \Big(1+\frac{\sqrt{2}}{m_\pi r}+\frac{1}{m_\pi^2 r^2}\Big) Y_0(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

**Term $[12L_2]$：**(This term corresponds to the exchange term of $[12L_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [12L_2] = -\Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k\cdot\hat{\bmr}\,\hat{\bmr} \, \frac{1}{r^2}Y_1(r)\bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
& = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) 2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

In the code：


$$
\begin{aligned}
&\il {\color{red} [12L_2]} = \frac{\sqrt{6}\, g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{1} \,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp} \hat{J}_{ab}\hat{J}_{\ap\bp}   \\
& \cdot \sum_{L_{ab}S_{ab}L_{\ap\bp}S_{\ap\bp}} (-)^{L_{ab}+S_{\ap\bp}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{L}_{\ap\bp}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll}l_{\ap} & l_{\bp} & L_{\ap\bp} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}  \\
& \cdot \sum_{nlNL,n^\prime l^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l^\prime \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{\ap\bp}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l^\prime,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} (-)^{l^\prime+L}\hat{l^\prime} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2} Y_1(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle  \\
& \cdot \sum_{h=0}^{2} (-)^{h}\hat{h} \left\{\begin{array}{lll} \,\,\,h & \,\,\,1 & \,\,\,1 \\ L_{ab} & S_{ab} & J_{ab} \\ L_{\ap\bp} & S_{\ap\bp} & J_{\ap\bp} \end{array}\right\}  C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L \end{array}\right\}
\end{aligned}
$$

**Term $[13M_2]$：**(This term corresponds to the exchange term of $[13M_1]$ $(k \longleftrightarrow l)$)


$$
\begin{aligned}
&\ii [13M_2] = -\Big\langle n_a l_a j_a \tau_a, n_b l_b j_b \tau_b \Big\|^{J_{ab}} \bm{\sigma}_k\frac{1}{r^2}Y_1(r)\bm{\tau}_\times^- \Big\| n_{\ap} l_{\ap} j_{\ap} \tau_{\ap}, n_{\bp} l_{\bp} j_{\bp} \tau_{\bp} \Big\rangle^{J_{\ap \bp}} \\
&\il = \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{J_{ab}}\,2\sqrt{6}\,i\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$

In the code：


$$
\begin{aligned}
&\il {\color{red} [13M_2]} = \frac{\sqrt{6}\,g_A}{4m_N F_\pi^2} \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big) (-)^{J_{ab}}\,\hat{j}_a\hat{j}_b\hat{j}_{\ap}\hat{j}_{\bp}\hat{J}_{ab}\hat{J}_{\ap\bp}  \\
& \cdot \sum_{L_{ab}S_{ab}S_{\ap\bp}} (-)^{L_{ab}} \hat{L}_{ab}^2\hat{S}_{ab}^2\hat{S}_{\ap\bp}^2  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \left\{\begin{array}{lll} J_{\ap\bp} & J_{ab} & 1 \\ S_{ab} & S_{\ap\bp} & L_{ab} \end{array}\right\}  \left\{\begin{array}{lll}l_{a} & l_{b} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\j_{a} & j_{b} & J_{ab} \end{array}\right\} \left\{\begin{array}{lll} l_{\ap} & l_{\bp} & L_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \\j_{\ap} & j_{\bp} & J_{\ap\bp} \end{array}\right\}   \\
& \cdot \sum_{nlNL,n^\prime} \llangle N L, n l \big| n_{a} l_{a}, n_{b} l_{b} \rrangle^{L_{ab}} \llangle N L, n^\prime l \big| n_{a^\prime} l_{a^\prime}, n_{b^\prime} l_{b^\prime} \rrangle^{L_{ab}} \\
& \cdot \delta_{2N+L+2n+l,2n_a+l_a+2n_b+l_b}\delta_{2N+L+2n^\prime+l,2n_{a^\prime}+l_{a^\prime}+2n_{b^\prime}+l_{b^\prime}} \Big\langle \underbrace{n l}_{r} \Big| \frac{1}{r^2}Y_1(\sqrt{2}r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$


## 3. 2νββ 核矩阵元（Nuclear Matrix Element）

For the $2\nu\beta\beta$ decay NMEs, because of isospin symmetry, Fermi transition is highly suppressed so that only the NME of the GT transition, $M_{GT}^{2\nu}$, is considered in calculations. The GT NME, in the QRPA approach is expressed as [2,3],


$$
\begin{aligned}
M^{2\nu} \approx M_{GT}^{2\nu} &= \sum_{if} \frac{\left\langle 0_f^+ \left\| O_{GT}^{\left(-\right)} \right\|1_f^+\right\rangle \left\langle 1_f^+|1_i^+ \right\rangle \left\langle 1_i^+ \left\| O_{GT}^{\left(-\right)} \right\|0_i^+\right\rangle}{\frac{1}{2}\left(\omega_i+\omega_f\right)},
\end{aligned}
$$


$$
\begin{aligned}
& \left\langle 0_f^+ \left| O_{GT}^{\left(-\right)} \right|1_f^+\right\rangle = \left\langle 0_f^+ \left| \left[O_{GT}^{\left(-\right)}, \mathcal{Q}_f^\dagger(JM)\right] \right|0_f^+\right\rangle \\
& \left\langle 1_i^+ \left| O_{GT}^{\left(-\right)} \right|0_i^+\right\rangle = \left\langle 0_i^+ \left| \left[\mathcal{Q}_f(JM), O_{GT}^{\left(-\right)}\right] \right|0_i^+\right\rangle
\end{aligned}
$$

where, the energies $\omega_i$ and $\omega_f$ in the denominator correspond to the excitation energies relative to the ground states of initial and final nuclei.

After including the contribution of the GT two-body currents, the GT operator takes the form of a sum of one-body and two-body current components,


$$
\begin{aligned}
O_{GT} = O_{GT}^{1b} + O_{GT}^{2b}.
\end{aligned}
$$

In Eq. (1), $\left\langle 1_f^+|1_i^+ \right\rangle$ is the overlap factor, given by the following expression,


$$
\begin{aligned}
\left\langle 1_f^+|1_i^+ \right\rangle &= \sum_{\pi_i\nu_i\pi_f\nu_f} \left\langle \pi_i | \pi_f \right\rangle \left\langle \nu_i | \nu_f \right\rangle \left(X_{\pi_i\nu_i}^{i}X_{\pi_f\nu_f}^{f} - Y_{\pi_i\nu_i}^{i}Y_{\pi_f\nu_f}^{f}\right) \\
&\cdot& \left( u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f} \right) \left( u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f} \right) \left\langle HFB_f|HFB_i \right\rangle
\end{aligned}
$$


$$
\begin{aligned}
\left\langle HFB_f|HFB_i \right\rangle = \prod_{\pi_i\pi_f\nu_i\nu_f} \left( u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f} \right) \left( u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f} \right)
\end{aligned}
$$

在QRPA理论中，初态核和末态核基态激发的中间态$|1_i^+ \rangle$和$|1_f^+ \rangle$不是正交的，因此需要计算其重叠因子。下面推导重叠因子 $\left\langle 1_f^+|1_i^+ \right\rangle$：


$$
\begin{aligned}
&&\left\langle 1_f^+|1_i^+ \right\rangle = \left\langle 0_f^+\left|\mathcal{Q}_f(JM) \mathcal{Q}_i^\dagger(JM)\right|0_i^+ \right\rangle = \left\langle QRPA_f\left|\mathcal{Q}_f(JM) \mathcal{Q}_i^\dagger(JM)\right|QRPA_i \right\rangle
\end{aligned}
$$

将初态核的QRPA激发算符在末态核的QRPA激发算符上展开：


$$
\begin{aligned}
\mathcal{Q}_i^\dagger(JM) = \sum_{f} \left( a_{if}\mathcal{Q}_f^\dagger(JM)+b_{if}\tilde{\mathcal{Q}}_f(JM)\right)
\end{aligned}
$$

将公式(3)代入公式(2)中：


$$
\begin{aligned}
& \left\langle 1_f^+|1_i^+ \right\rangle = \left\langle QRPA_f\left|\mathcal{Q}_f(JM) \sum_{f} \left( a_{if}\mathcal{Q}_f^\dagger(JM)+b_{if}\tilde{\mathcal{Q}}_f(JM)\right)\right|QRPA_i \right\rangle \\
& = \sum_{f} \left[\left\langle QRPA_f\left| a_{if}\mathcal{Q}_f(JM)\mathcal{Q}_f^\dagger(JM) \right|QRPA_i \right\rangle + \left\langle QRPA_f\left| b_{if}\mathcal{Q}_f(JM)\tilde{\mathcal{Q}}_f(JM) \right|QRPA_i \right\rangle\right] \\
& \approx \sum_{f} a_{if} \left\langle QRPA_f|QRPA_i \right\rangle \overset{QBA}{\approx} \sum_{f} a_{if} \left\langle HFB_f|HFB_i \right\rangle
\end{aligned}
$$

其中，忽略掉$b_{if}$项是因为初态核的QRPA基态和由末态核的QRPA基态激发的双声子激发态之间的重叠因子很小。

初态核和末态核的粒子算符通过单粒子态重叠矩阵联系：


$$
\begin{aligned}
c_{\alpha}^{(i)\dagger} = \sum_{\beta} \left\langle \alpha | \beta \right\rangle c_{\beta}^{(f)\dagger}
\end{aligned}
$$

其中，单粒子态$|\alpha\rangle$中的好量子数包含$(n,l,j,m,\tau)$。

QRPA的激发算符表达式为：


$$
\begin{aligned}
\mathcal{Q}_i^\dagger(JM) = \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} A_{\pi_i\nu_i}^\dagger(JM) - Y_{\pi_i\nu_i}^{iJ} \tilde{A}_{\pi_i\nu_i}(JM)
\end{aligned}
$$

因此：


$$
\begin{aligned}
& A_{\pi_i\nu_i}^\dagger(JM) = \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} a_{\pi_i}^\dagger a_{\nu_i}^\dagger \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} (u_{\pi_i}c_{\pi_i}^\dagger-v_{\pi_i}\tilde{c}_{\pi_i})(u_{\nu_i}c_{\nu_i}^\dagger-v_{\nu_i}\tilde{c}_{\nu_i}) \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} \sum_{\pi_f}\left\langle \pi_i|\pi_f \right\rangle (u_{\pi_i}c_{\pi_f}^\dagger-v_{\pi_i}\tilde{c}_{\pi_f}) \sum_{\nu_f}\left\langle \nu_i|\nu_f \right\rangle (u_{\nu_i}c_{\nu_f}^\dagger-v_{\nu_i}\tilde{c}_{\nu_f}) \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[u_{\pi_i}(u_{\pi_f}a_{\pi_f}^\dagger+v_{\pi_f}\tilde{a}_{\pi_f})-v_{\pi_i}(u_{\pi_f}\tilde{a}_{\pi_f}-v_{\pi_f}a_{\pi_f}^\dagger)\right] \\
& \cdot \left[u_{\nu_i}(u_{\nu_f}a_{\nu_f}^\dagger+v_{\nu_f}\tilde{a}_{\nu_f})-v_{\nu_i}(u_{\nu_f}\tilde{a}_{\nu_f}-v_{\nu_f}a_{\nu_f}^\dagger)\right] \\
= & \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{JM} \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})a_{\pi_f}^\dagger+(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\tilde{a}_{\pi_f}\right] \\
& \cdot \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})a_{\nu_f}^\dagger+(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\tilde{a}_{\nu_f}\right] \\
= & \sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{JM} \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \\
& \cdot \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})a_{\pi_f}^\dagger a_{\nu_f}^\dagger+(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\tilde{a}_{\pi_f}\tilde{a}_{\nu_f}\right] \\
= & \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{JM} a_{\pi_f}^\dagger a_{\nu_f}^\dagger \right.\\
& \left.+ (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\right. \\
& \left.\cdot \sum_{m_{\pi_f}m_{\nu_f}} (-)^{j_{\pi_f}+j_{\nu_f}-J}C_{j_{\pi_f} -m_{\pi_f} j_{\nu_f} -m_{\nu_f}}^{J-M} (-)^{j_{\pi_f}+m_{\pi_f}}a_{-\pi_f}(-)^{j_{\nu_f}+m_{\nu_f}}a_{-\nu_f}\right] \\
= & \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{JM} a_{\pi_f}^\dagger a_{\nu_f}^\dagger \right.\\
& \left.+ (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \sum_{m_{\pi_f}m_{\nu_f}} (-)^{J+M}C_{j_{\pi_f} -m_{\pi_f} j_{\nu_f} -m_{\nu_f}}^{J-M} a_{-\pi_f}a_{-\nu_f}\right] \\
= & \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})A_{\pi_f \nu_f}^\dagger(JM) \right.\\
& \left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \tilde{A}_{\pi_f \nu_f}(JM) \right]
\end{aligned}
$$

同理，


$$
\begin{aligned}
& \tilde{A}_{\pi_i\nu_i}(JM) = (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} a_{\nu_i} a_{\pi_i} \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} (u_{\nu_i}c_{\nu_i}-v_{\nu_i}\tilde{c}_{\nu_i}^\dagger) (u_{\pi_i}c_{\pi_i}-v_{\pi_i}\tilde{c}_{\pi_i}^\dagger) \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} \sum_{\nu_f}\left\langle \nu_i|\nu_f \right\rangle(u_{\nu_i}c_{\nu_f}-v_{\nu_i}\tilde{c}_{\nu_f}^\dagger) \sum_{\pi_f}\left\langle \pi_i|\pi_f \right\rangle(u_{\pi_i}c_{\pi_f}-v_{\pi_i}\tilde{c}_{\pi_f}^\dagger) \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[u_{\nu_i}(u_{\nu_f}a_{\nu_f}+v_{\nu_f}\tilde{a}_{\nu_f}^\dagger)-v_{\nu_i}(u_{\nu_f}\tilde{a}_{\nu_f}^\dagger-v_{\nu_f}a_{\nu_f})\right] \\
& \cdot \left[u_{\pi_i}(u_{\pi_f}a_{\pi_f}+v_{\pi_f}\tilde{a}_{\pi_f}^\dagger)-v_{\pi_i}(u_{\pi_f}\tilde{a}_{\pi_f}^\dagger-v_{\pi_f}a_{\pi_f})\right] \\
= & (-)^{J+M} \sum_{m_{\pi_i}m_{\nu_i}} C_{j_{\pi_i} m_{\pi_i} j_{\nu_i} m_{\nu_i}}^{J-M} \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})a_{\nu_f}+(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})\tilde{a}_{\nu_f}^\dagger\right] \\
& \cdot \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})a_{\pi_f}+(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\tilde{a}_{\pi_f}^\dagger\right] \\
= & (-)^{J+M} \sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{J-M} \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \\
& \cdot \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})a_{\nu_f}a_{\pi_f}+(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\tilde{a}_{\nu_f}^\dagger\tilde{a}_{\pi_f}^\dagger\right] \\
= & \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(-)^{J+M} \sum_{m_{\pi_f}m_{\nu_f}} C_{j_{\pi_f} m_{\pi_f} j_{\nu_f} m_{\nu_f}}^{J-M} a_{\nu_f}a_{\pi_f}\right. \\
& \left. + (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})\right. \\
& \left. \cdot (-)^{J+M} \sum_{m_{\pi_f}m_{\nu_f}} (-)^{j_{\pi_f}+j_{\nu_f}-J}C_{j_{\pi_f} -m_{\pi_f} j_{\nu_f} -m_{\nu_f}}^{JM} (-)^{j_{\nu_f}+m_{\nu_f}}a_{-\nu_f}^\dagger (-)^{j_{\pi_f}+m_{\pi_f}}a_{-\pi_f}^\dagger\right] \\
= & \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) \tilde{A}_{\pi_f\nu_f}(JM) \right. \\
& \left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) A_{\pi_f\nu_f}^\dagger(JM) \right]
\end{aligned}
$$

因为：


$$
\begin{aligned}
\mathcal{Q}_f^\dagger(JM) = \sum_{\pi_f\nu_f} X_{\pi_f\nu_f}^{fJ} A_{\pi_f\nu_f}^\dagger(JM) - Y_{\pi_f\nu_f}^{fJ} \tilde{A}_{\pi_f\nu_f}(JM)
\end{aligned}
$$


$$
\begin{aligned}
\tilde{\mathcal{Q}}_f(JM) &= (-)^{J+M} \mathcal{Q}_f(J-M) \\
&= (-)^{J+M} \sum_{\pi_f\nu_f} X_{\pi_f\nu_f}^{fJ} A_{\pi_f\nu_f}(J-M) - Y_{\pi_f\nu_f}^{fJ} \tilde{A}_{\pi_f\nu_f}^\dagger(J-M) \\
&= \sum_{\pi_f\nu_f} X_{\pi_f\nu_f}^{fJ} \tilde{A}_{\pi_f\nu_f}(JM) - Y_{\pi_f\nu_f}^{fJ} A_{\pi_f\nu_f}^\dagger(JM)
\end{aligned}
$$

将公式(7)和公式(8)写成矩阵的形式：


$$
\begin{aligned}
\left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right) = \left(\begin{array}{ll} \,\,\,X & - Y  \\  - Y & \,\,\,X \end{array}\right) \left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right)
\end{aligned}
$$

对其做一个幺正变换：


$$
\begin{gathered}
\left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right) = \left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{ll} \,\,\,X & - Y  \\  - Y & \,\,\,X \end{array}\right) \left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right) \\
\Longrightarrow \left(\begin{array}{ll} X^2-Y^2 & \,\,\,\,\,\,\,\,\,\,0  \\  \,\,\,\,\,\,\,\,\,\,0 & X^2-Y^2 \end{array}\right) \left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right) = \left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right)
\end{gathered}
$$

由文献 [4] 中(19.9)式知QRPA方程满足的正交归一性：


$$
\begin{aligned}
\left(\begin{array}{l} A_{\pi_f\nu_f}^\dagger \\ \tilde{A}_{\pi_f\nu_f} \end{array}\right) = \left(\begin{array}{ll} X & \,Y  \\  Y & X \end{array}\right) \left(\begin{array}{l} \mathcal{Q}_f^\dagger \\ \tilde{\mathcal{Q}}_f \end{array}\right)
\end{aligned}
$$

因此：


$$
\begin{aligned}
A_{\pi_f\nu_f}^\dagger(JM) &= \sum_{f} X_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) + Y_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM)  \\
\tilde{A}_{\pi_f\nu_f}(JM) &= \sum_{f} X_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) + Y_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM)
\end{aligned}
$$

联立公式(5,6,9,10)得：


$$
\begin{aligned}
& A_{\pi_i\nu_i}^\dagger(JM) = \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})A_{\pi_f \nu_f}^\dagger(JM) \right.\\
& \left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \tilde{A}_{\pi_f \nu_f}(JM) \right] \\
&= \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) + Y_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM)\right) \right.\\
& \left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) \left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) + Y_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM)\right) \right]
\end{aligned}
$$


$$
\begin{aligned}
& \tilde{A}_{\pi_i\nu_i}(JM) = \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) \tilde{A}_{\pi_f\nu_f}(JM) \right. \\
& \left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) A_{\pi_f\nu_f}^\dagger(JM) \right] \\
&= \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) \left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM) + Y_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM)\right) \right. \\
& \left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) \left(\sum_{f} X_{\pi_f\nu_f}^{fJ} \mathcal{Q}_f^\dagger(JM) + Y_{\pi_f\nu_f}^{fJ} \tilde{\mathcal{Q}}_f(JM)\right) \right]
\end{aligned}
$$

所以：


$$
\begin{aligned}
& \mathcal{Q}_i^\dagger(JM) \approx \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} A_{\pi_i\nu_i}^\dagger(JM) - Y_{\pi_i\nu_i}^{iJ} \tilde{A}_{\pi_i\nu_i}(JM) \\
= & \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})X_{\pi_f\nu_f}^{fJ} \right.\right.\\
& \left.\left.- (u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f})(u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f}) Y_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \\
& - Y_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) Y_{\pi_f\nu_f}^{fJ} \right.\right. \\
& \left.\left. - (u_{\nu_i}v_{\nu_f}-v_{\nu_i}u_{\nu_f})(u_{\pi_i}v_{\pi_f}-v_{\pi_i}u_{\pi_f}) X_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \\
\approx & \sum_{\pi_i\nu_i} X_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})X_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \\
& - Y_{\pi_i\nu_i}^{iJ} \left( \sum_{\pi_f \nu_f}\left\langle \pi_i|\pi_f \right\rangle\left\langle \nu_i|\nu_f \right\rangle \sum_{f} \left[(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})(u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f}) Y_{\pi_f\nu_f}^{fJ} \right] \mathcal{Q}_f^\dagger(JM) \right) \\
= & \sum_{f} \left( \sum_{\pi_i \nu_i \pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle (u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\left(X_{\pi_i\nu_i}^{iJ} X_{\pi_f\nu_f}^{fJ} - Y_{\pi_i\nu_i}^{iJ} Y_{\pi_f\nu_f}^{fJ}\right) \right) \mathcal{Q}_f^\dagger(JM)
\end{aligned}
$$

所以：


$$
\begin{aligned}
a_{if} = \sum_{\pi_i \nu_i \pi_f \nu_f} \left\langle \pi_i|\pi_f \right\rangle \left\langle \nu_i|\nu_f \right\rangle (u_{\pi_i}u_{\pi_f}+v_{\pi_i}v_{\pi_f})(u_{\nu_i}u_{\nu_f}+v_{\nu_i}v_{\nu_f})\left(X_{\pi_i\nu_i}^{iJ} X_{\pi_f\nu_f}^{fJ} - Y_{\pi_i\nu_i}^{iJ} Y_{\pi_f\nu_f}^{fJ}\right)
\end{aligned}
$$

令$c_i^{k\dagger}=c_f^{k\dagger}$,有：


$$
\begin{aligned}
& \left\langle HFB_f|HFB_i \right\rangle = \left\langle 0\left|\prod_{k}\left(u_f^k+v_f^k \tilde{c}_f^k c_f^k\right) \prod_{l}\left(u_i^l+v_i^l c_i^{l\dagger} \tilde{c}_i^{l\dagger}\right)\right|0 \right\rangle \\
=& \left\langle 0\left|\prod_{k}\left(u_f^k+v_f^k \tilde{c}_f^k c_f^k\right) \prod_{l}\left(u_i^l+v_i^l c_f^{l\dagger} \tilde{c}_f^{l\dagger}\right)\right|0 \right\rangle  \\
=& \prod_{k} u_i^k u_f^k \\
&+ \sum_{k_1} v_i^{k_1} v_f^{k_1} \left\langle 0\left| \tilde{c}_f^{k_1} c_f^{k_1} c_f^{k_1\dagger} \tilde{c}_f^{k_1\dagger}\right|0 \right\rangle \prod_{k\neq k_1} u_i^k u_f^k \\
&+ \sum_{k_1\neq k_2} v_i^{k_1} v_f^{k_1} v_i^{k_2} v_f^{k_2} \left\langle 0\left| \tilde{c}_f^{k_1} c_f^{k_1} \tilde{c}_f^{k_2} c_f^{k_2} c_f^{k_1\dagger} \tilde{c}_f^{k_1\dagger}c_f^{k_2\dagger} \tilde{c}_f^{k_2\dagger}\right|0 \right\rangle \prod_{k\neq k_1,k_2} u_i^k u_f^k \\
&+ \cdots + \prod_{k} v_i^k v_f^k \\
=& \prod_{k} u_i^k u_f^k \\
&+ \sum_{k_1} v_i^{k_1} v_f^{k_1} \prod_{k\neq k_1} u_i^k u_f^k \\
&+ \sum_{k_1\neq k_2} v_i^{k_1} v_f^{k_1} v_i^{k_2} v_f^{k_2} \prod_{k\neq k_1,k_2} u_i^k u_f^k \\
&+ \cdots + \prod_{k} v_i^k v_f^k \\
=& \prod_k \left(u_i^k u_f^k + v_i^k v_f^k\right)
\end{aligned}
$$


## 附录 A：基础公式（Appendix A）


### Basic formula

Define,$\tau_n=\frac{1}{2},\tau_p=-\frac{1}{2}$，where $n$ and $p$ represent the neutron and proton, respectively.


$$
\begin{aligned}
& \big\langle \tau_a\tau_b \big|\bm{\tau}_l^{\pm} \big|\tau_{\ap}\tau_{\bp}\big\rangle  = \delta_{\tau_a \tau_{\ap}} \delta_{\tau_b, \pm\frac{1}{2}} \delta_{\tau_{\bp}, \mp\frac{1}{2}}
\end{aligned}
$$


$$
\begin{aligned}
& \big\langle \tau_a\tau_b \big|\bm{\tau}_k^{\pm} \big|\tau_{\ap}\tau_{\bp}\big\rangle  = \delta_{\tau_b \tau_{\bp}} \delta_{\tau_a, \pm\frac{1}{2}} \delta_{\tau_{\ap}, \mp\frac{1}{2}}
\end{aligned}
$$


$$
\begin{aligned}
\Big\langle \frac{1}{2}\Big\|\bm{\sigma}\Big\|\frac{1}{2} \Big\rangle \underset{P31(2.39)}{\overset{\text{[4]}}{=}} \sqrt{6}
\end{aligned}
$$


### Formulas in textbooks and literature


$$
\begin{aligned}
& \big|j_{1} j_{3}\left(j_{13}\right) j_{2} j_{4}\left(j_{24}\right) \big\rangle^{j m} \underset{P16(1.84)}{\overset{\text{[4]}}{=}} \sum_{j_{12} j_{34}} \hat{j}_{12}\, \hat{j}_{34}\, \hat{j}_{13}\, \hat{j}_{24}  \left\{\begin{array}{lll}j_{1} & j_{2} & j_{12} \\j_{3} & j_{4} & j_{34} \\j_{13} & j_{24} & \,\,j\end{array}\right\}  \big|j_{1} j_{2}\left(j_{12}\right) j_{3} j_{4}\left(j_{34}\right) \big\rangle^{jm}
\end{aligned}
$$

MOSHINSKY Transformation（$\bmr=\frac{1}{\sqrt{2}}(\bmr_1-\bmr_2)$）:


$$
\begin{aligned}
\big|n_{1} l_{1}, n_{2} l_{2}\big\rangle^{\lambda \mu} \underset{P192(1)}{\overset{\text{[5]}}{=}} \sum_{n l N L} \big|N L, n l \big\rangle^{\lambda \mu} \llangle N L, n l \big| n_{1} l_{1}, n_{2} l_{2} \rrangle^{\lambda}
\end{aligned}
$$

This transformation satisfies the following relations:


$$
\begin{aligned}
2 n_{1}+l_{1}+2 n_{2}+l_{2} \underset{P193(5)}{\overset{\text{[5]}}{=}} 2 n+l+2 N+L
\end{aligned}
$$

Reduced Matrix Elements for Different Operators:


$$
\begin{aligned}
\langle l \|1\| l \rangle = \hat{l}
\end{aligned}
$$


### Simple formulas derived from textbooks and literature

$**\bigstar**$ As given in Ref.[1] P479(28),


$$
\begin{gathered}
\langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime}|^{j^{\prime} m^{\prime}} [\hat{\mathbf{P}}_{a}(1) \otimes \hat{\mathbf{Q}}_{b}(2)]^{c \gamma}|n_{1} j_{1}, n_{2} j_{2} \rangle^{j m} \\
=(-1)^{2 c} \,\hat{c}\hat{j} C_{j m c \gamma}^{j^{\prime} m^{\prime}}
\left\{\begin{array}{ccc}
a & b & c \\
j_{1}^{\prime} & j_{2}^{\prime} &     j^{\prime} \\
j_{1} & j_{2} & j
\end{array}\right\}
\langle n_{1}^{\prime} j_{1}^{\prime}\|\hat{\mathbf{P}}_{a}(1)\| n_{1} j_{1}\rangle \langle n_{2}^{\prime} j_{2}^{\prime}\|\hat{\mathbf{Q}}_{b}(2)\| n_{2} j_{2}\rangle \\
\underset{P475(2)}{\overset{\text{[1]}}{\Longrightarrow}} (-)^{2c}C_{j m c \gamma}^{j^\prime m^\prime}\frac{1}{\hat{j^\prime}} \langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime}\|^{j^{\prime}} [\hat{\mathbf{P}}_{a}(1) \otimes \hat{\mathbf{Q}}_{b}(2)]^{c}\|n_{1} j_{1}, n_{2} j_{2} \rangle^{j} \\
=(-1)^{2 c} \,\hat{c}\hat{j} C_{j m c \gamma}^{j^{\prime} m^{\prime}}
\left\{\begin{array}{ccc}
a & b & c \\
j_{1}^{\prime} & j_{2}^{\prime} &     j^{\prime} \\
j_{1} & j_{2} & j
\end{array}\right\}
\langle n_{1}^{\prime} j_{1}^{\prime}\|\hat{\mathbf{P}}_{a}(1)\| n_{1} j_{1}\rangle \langle n_{2}^{\prime} j_{2}^{\prime}\|\hat{\mathbf{Q}}_{b}(2)\| n_{2} j_{2}\rangle \\
\Longrightarrow {\color{blue} \langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime}\|^{j^{\prime}} [\hat{\mathbf{P}}_{a}(1) \otimes \hat{\mathbf{Q}}_{b}(2)]^{c}\|n_{1} j_{1}, n_{2} j_{2} \rangle^{j} } \\
{\color{blue} = \hat{c}\hat{j}\hat{j^\prime}
\left\{\begin{array}{ccc}
a & b & c \\
j_{1}^{\prime} & j_{2}^{\prime} &     j^{\prime} \\
j_{1} & j_{2} & j
\end{array}\right\}
\langle n_{1}^{\prime} j_{1}^{\prime}\|\hat{\mathbf{P}}_{a}(1)\| n_{1} j_{1}\rangle \langle n_{2}^{\prime} j_{2}^{\prime}\|\hat{\mathbf{Q}}_{b}(2)\| n_{2} j_{2}\rangle }
\end{gathered}
$$

$**\bigstar**$ As given in Ref.[8] P34(A-47),


$$
\begin{gathered}
{\color{blue}\left\langle n_{1}^{\prime} j_{1}^{\prime}, n_{2}^{\prime} j_{2}^{\prime} \left\|^{j^{\prime}} [\hat{\mathbf{Q}}_{b}(2) \otimes \hat{\mathbf{P}}_{a}(1)]^{c}\right\| n_{1} j_{1}, n_{2} j_{2} \right\rangle^j} \\
{\color{blue} =(-)^{a+b-c} \hat{c}\hat{j}\hat{j^\prime}
\left\{\begin{array}{ccc}
a & b & c \\
j_{1}^{\prime} & j_{2}^{\prime} & j^{\prime} \\
j_{1} & j_{2} & j
\end{array}\right\}
\left\langle n_{1}^{\prime} j_{1}^{\prime}\left\|\hat{\mathbf{P}}_{a}(1)\right\| n_{1} j_{1}\right\rangle\left\langle n_{2}^{\prime} j_{2}^{\prime}\left\|\hat{\mathbf{Q}}_{b}(2)\right\| n_{2} j_{2}\right\rangle}
\end{gathered}
$$

$**\bigstar**$ As given in Ref.(A-8),


$$
\begin{aligned}
& \langle j_{1}^\prime, j_{2}^\prime\|^{j^{\prime}} \hat{\mathbf{P}}_{a}(1) \|j_{1}, j_{2} \rangle^{j}  \\
&\il = \hat{a}\hat{j}\hat{j^\prime}
\left\{\begin{array}{ccc}
a & 0 & a \\
j_{1}^\prime & j_{2}^\prime & j^{\prime} \\
j_{1} & j_{2} & j
\end{array}\right\}
\langle j_{1}^\prime\|\hat{\mathbf{P}}_{a}(1)\| j_{1}\rangle \langle j_{2}^\prime\| 1 \| j_{2}\rangle \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}} \delta_{j_2 j_2^\prime}(-)^{a+j_1^\prime+j_2+j} \frac{\hat{j}\hat{j^\prime}}{\hat{j}_2}
\left\{\begin{array}{ccc}
j^\prime & j & a \\
j_{1} & j_{1}^\prime & j_2
\end{array}\right\}
\langle j_{1}^\prime\|\hat{\mathbf{P}}_{a}(1)\| j_{1}\rangle \langle j_{2}\| 1 \| j_{2}\rangle \\
&\il \underset{P484(9)}{\overset{\text{[1]}}{=}} \delta_{j_2 j_2^\prime}(-)^{a+j_1^\prime+j_2+j} \hat{j}\hat{j^\prime}
\left\{\begin{array}{ccc}
j^\prime & j & a \\
j_{1} & j_{1}^\prime & j_2
\end{array}\right\}
\langle j_{1}^\prime\|\hat{\mathbf{P}}_{a}(1)\| j_{1}\rangle
\end{aligned}
$$

$**\bigstar**$ As given in Ref.(A-8),


$$
\begin{aligned}
& \langle j_{1}^\prime, j_{2}^\prime\|^{j^{\prime}} \hat{\mathbf{Q}}_{b}(2)\|j_{1}, j_{2} \rangle^{j}  \\
&\il = \hat{b}\hat{j}\hat{j^\prime}
\left\{\begin{array}{ccc}
0 & b & b \\
j_{1}^\prime & j_{2}^\prime & j^{\prime} \\
j_{1} & j_{2} & j
\end{array}\right\}
\langle j_{1}^\prime\|1\| j_{1}\rangle \langle j_{2}^\prime\|\hat{\mathbf{Q}}_{b}(2)\| j_{2}\rangle \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}}  \delta_{j_1 j_1^\prime}(-)^{b+j_1+j_2+j^\prime} \frac{\hat{j}\hat{j^\prime}}{\hat{j}_1}
\left\{\begin{array}{ccc}
j & j^\prime & b \\
j_{2}^\prime & j_{2} & j_1
\end{array}\right\}
\langle j_{1}\|1\| j_{1}\rangle \langle j_{2}^\prime\|\hat{\mathbf{Q}}_{b}(2)\| j_{2}\rangle \\
&\il \underset{P484(9)}{\overset{\text{[1]}}{=}} \delta_{j_1 j_1^\prime}(-)^{b+j_1+j_2+j^\prime} \hat{j}\hat{j^\prime}
\left\{\begin{array}{ccc}
j & j^\prime & b \\
j_{2}^\prime & j_{2} & j_1
\end{array}\right\}
\langle j_{2}^\prime\|\hat{\mathbf{Q}}_{b}(2)\| j_{2}\rangle
\end{aligned}
$$

$\redstar$ As given in Ref.[1]P165(18),


$$
\begin{aligned}
& \delta(\bmr_1-\bmr_2) = \frac{\delta(r_1-r_2)}{r_1^2}\sum_{l=0}^\infty \big(\hat{\bm{Y}}_l(\hat{\bmr}_1) \cdot \hat{\bm{Y}}_l(\hat{\bmr}_2)\big) \\
&\il \underset{P65(35)}{\overset{\text{[1]}}{=}} \frac{\delta(r_1-r_2)}{r_1^2}\sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\big[\hat{\bm{Y}}_l(\hat{\bmr}_1) \otimes \hat{\bm{Y}}_l(\hat{\bmr}_2)\big]^0
\end{aligned}
$$


## 附录 B：推导公式（Appendix B）


### Derived formula


$$
\begin{aligned}
& \redstar \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
& \il \overset{(A-11)}{=} (-)^{S_{ab}}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \bm{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
& \il \overset{(A-3)}{=} (-)^{S_{ab}}\sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_k \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
& \il \overset{(A-10)}{=} (-)^{S_{\ap\bp}} \hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{ab} & S_{\ap\bp} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \bm{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
& \il \overset{(A-3)}{=} (-)^{S_{\ap\bp}} \sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{ab} & S_{\ap\bp} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\} \\
& \il = (-)^{S_{\ap\bp}} \sqrt{6}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} S_{\ap\bp} & S_{ab} & 1 \\ \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \end{array}\right\}
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(r) \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(A-11)}{=} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & 0 \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{\bmr} \Big\| Y_2(r) \Big\| n^\prime l^\prime \Big\rangle \\
&\il = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & 0 \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l^\prime \Big\rangle \Big\langle \underbrace{l}_{\hat{\bmr}} \Big\| 1 \Big\| l^\prime \Big\rangle \\
&\il \overset{(A-7)}{=} \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{l}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & 0 \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l^\prime \Big\rangle \\
&\il \underset{P299(1)}{\overset{\text{[1]}}{=}} \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}(-)^{L^\prime+l^\prime+L_{ab}} \hat{l}\hat{L}_{ab}\hat{L}_{\ap\bp} (-)^{L_{ab}+l+L^\prime}\delta_{L_{ab}L_{\ap\bp}}\frac{1}{\hat{L}_{ab}\hat{l}} \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l^\prime \Big\rangle \\
&\il = \delta_{ll^\prime}\delta_{NN^\prime}\delta_{LL^\prime}\delta_{L_{ab}L_{\ap\bp}} \hat{L}_{ab} \Big\langle \underbrace{n l}_{r} \Big| Y_2(r) \Big| n^\prime l \Big\rangle
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \bm{\sigma}_l\cdot\hat{\bmr}\,\hat{\bmr} \\
&\il \underset{P66(8)}{\overset{\text{[1]}}{=}} -\sqrt{3} \big[ [\bm{\sigma}_l \otimes \hat{\bmr}]^0 \otimes \hat{\bmr} \big]^1 \\
&\il \underset{P69(1)}{\overset{\text{[1]}}{=}} -\sqrt{3} \sum_{h=0}^{2}\hat{h}  \left\{\begin{array}{ccc} 1 & 1 & 0 \\ 1 & 1 & h \end{array}\right\}  \big[ \bm{\sigma}_l \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h \big]^1 \\
&\il \underset{P299(1)}{\overset{\text{[1]}}{=}} -\sqrt{3} \sum_{h=0}^{2}\hat{h}  (-)^{h}\frac{1}{3}  \big[ \bm{\sigma}_l \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h \big]^1 \\
&\il = \frac{1}{\sqrt{3}} \sum_{h=0}^{2} (-)^{h+1}\hat{h} \big[ \bm{\sigma}_l \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h \big]^1
\end{aligned}
$$


$$
\begin{aligned}
& \redstar [\hat{\bmr} \otimes \hat{\bmr}]^h \\
&\il = [\hat{\bm{C}_1} \otimes \hat{\bm{C}_1}]^h \\
&\il \underset{P131(7)}{\overset{\text{[1]}}{=}} \frac{4\pi}{3}[\hat{\bm{Y}_1} \otimes \hat{\bm{Y}_1}]^h \\
&\il \underset{P144(14)}{\overset{\text{[1]}}{=}} \frac{4\pi}{3}\sqrt{\frac{9}{4\pi(2h+1)}}C_{1010}^{h0}\hat{\bm{Y}}_h \\
&\il = \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0}\hat{\bm{Y}}_h
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\bmr} \otimes \hat{\bmr}]^h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(B-5)}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \Big\langle [N L \otimes n l]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \hat{\bm{Y}}_h \Big\| [N^\prime L^\prime \otimes n^\prime l^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(A-11)}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L^\prime+l^\prime+L_{ab}}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & h \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle n l \Big\| Y_2(\sqrt{2}r) \hat{\bm{Y}}_h \Big\| n^\prime l^\prime \Big\rangle \\
&\il = \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L^\prime+l^\prime+L_{ab}}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & h \\ l & l^\prime & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \Big\langle \underbrace{l}_{\hat{\bmr}} \Big\| \hat{\bm{Y}}_h \Big\| l^\prime \Big\rangle \\
&\il \underset{P496(105)}{\overset{\text{[1]}}{=}} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L^\prime+l^\prime+L_{ab}}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & h \\ l & l^\prime & L^\prime \end{array}\right\}  \\
& \cdot \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \sqrt{\frac{(2h+1)(2l^\prime+1)}{4\pi}} C_{l^\prime 0 h 0}^{l0} \\
&\il = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+L+l^\prime+L_{ab}}C_{1010}^{h0} C_{l^\prime 0 h 0}^{l0}\hat{l^\prime} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & h \\ l & l^\prime & L \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [n l \otimes N L]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) [\hat{\bmr} \otimes \hat{\bmr}]^h \Big\| [n^\prime l^\prime \otimes N^\prime L^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(B-5)}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \Big\langle [n l \otimes N L]^{L_{ab}} \Big\| Y_2(\sqrt{2}r) \hat{\bm{Y}}_h \Big\| [n^\prime l^\prime \otimes N^\prime L^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(A-10)}{=} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{\ap\bp}}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{\bmr} \Big\| Y_2(\sqrt{2}r) \hat{\bm{Y}}_h \Big\| n^\prime l^\prime \Big\rangle \\
&\il = \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{\ap\bp}}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \Big\langle \underbrace{l}_{\hat{\bmr}} \Big\| \hat{\bm{Y}}_h \Big\| l^\prime \Big\rangle \\
&\il \underset{P496(105)}{\overset{\text{[1]}}{=}} \sqrt{\frac{4\pi}{2h+1}}C_{1010}^{h0} \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{\ap\bp}}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \\
& \cdot \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle \sqrt{\frac{(2h+1)(2l^\prime+1)}{4\pi}} C_{l^\prime 0 h 0}^{l0} \\
&\il = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{h+l+L^\prime+L_{\ap\bp}}C_{1010}^{h0}C_{l^\prime 0 h 0}^{l0} \hat{l^\prime}\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & h \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| Y_2(\sqrt{2}r) \Big| n^\prime l^\prime \Big\rangle
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \delta(\bmr_1-\bmr_2) \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(A-12)}{=} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\, \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| \frac{\delta(r_1-r_2)}{r_1^2}\big[\hat{\bm{Y}}_l(\hat{\bmr}_1) \otimes \hat{\bm{Y}}_l(\hat{\bmr}_2)\big]^0 \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle \\
&\il \overset{(A-8)}{=} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{\ap} & l_{\bp} & L_{\ap\bp} \end{array}\right\}  \delta(r_1-r_2) \Big\langle \underbrace{n_a l_a}_{\bmr_1} \Big\| \frac{1}{r_1^2}\hat{\bm{Y}}_l(\hat{\bmr}_1) \Big\| n_{\ap} l_{\ap} \Big\rangle \\
& \cdot \Big\langle \underbrace{n_b l_b}_{\bmr_2} \Big\| \hat{\bm{Y}}_l(\hat{\bmr}_2) \Big\| n_{\bp} l_{\bp} \Big\rangle \\
&\il = \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{\ap} & l_{\bp} & L_{\ap\bp} \end{array}\right\}  \delta(r_1-r_2) \Big\langle \underbrace{n_a l_a}_{r_1} \Big| \frac{1}{r_1^2} \Big| n_{\ap} l_{\ap} \Big\rangle  \Big\langle \underbrace{l_a}_{\hat{\bmr}_1} \Big\| \hat{\bm{Y}}_l(\hat{\bmr}_1) \Big\| l_{\ap} \Big\rangle \\
& \cdot \Big\langle \underbrace{n_b l_b}_{r_2} \Big| 1 \Big| n_{\bp} l_{\bp} \Big\rangle  \Big\langle \underbrace{l_b}_{\hat{\bmr}_2} \Big\| \hat{\bm{Y}}_l(\hat{\bmr}_2) \Big\| l_{\bp} \Big\rangle \\
&\il = \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{\ap} & l_{\bp} & L_{\ap\bp} \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle  \Big\langle \underbrace{l_a}_{\hat{\bmr}_1} \Big\| \hat{\bm{Y}}_l(\hat{\bmr}_1) \Big\| l_{\ap} \Big\rangle \Big\langle \underbrace{l_b}_{\hat{\bmr}_2} \Big\| \hat{\bm{Y}}_l(\hat{\bmr}_2) \Big\| l_{\bp} \Big\rangle \\
&\il \underset{P496(105)}{\overset{\text{[1]}}{=}} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} l & l & 0 \\ l_a & l_b & L_{ab} \\ l_{\ap} & l_{\bp} & L_{\ap\bp} \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \\
& \cdot \sqrt{\frac{(2l_{\ap}+1)(2l+1)}{4\pi}}\,C_{l_{\ap} 0 l 0}^{l_a 0} \sqrt{\frac{(2l_{\bp}+1)(2l+1)}{4\pi}}\,C_{l_{\bp} 0 l 0}^{l_b 0} \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}} \sum_{l=0}^\infty \,(-)^l\,\hat{l}\,\hat{L}_{ab}^2 \delta_{L_{ab}L_{\ap\bp}}(-)^{l+l_{\ap}+l_b+L_{ab}}\frac{1}{\hat{l}\hat{L}_{ab}}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle \\
& \cdot \sqrt{\frac{(2l_{\ap}+1)(2l+1)}{4\pi}}\,C_{l_{\ap} 0 l 0}^{l_a 0} \sqrt{\frac{(2l_{\bp}+1)(2l+1)}{4\pi}}\,C_{l_{\bp} 0 l 0}^{l_b 0} \\
&\il = \sum_{l=0}^\infty (-)^{l_{\ap}+l_b+L_{ab}}\frac{1}{4\pi}\delta_{L_{ab}L_{\ap\bp}}\,\hat{l}^{\,2}\,\hat{l}_{\ap}\hat{l}_{\bp}\hat{L}_{ab}\,C_{l_{\ap} 0 l 0}^{l_a 0} \,C_{l_{\bp} 0 l 0}^{l_b 0}  \left\{\begin{array}{ccc} l_{\bp} & l_{\ap} & L_{ab} \\ l_a & l_b & l \end{array}\right\}  \Big\langle \underbrace{n_a l_a}_{r_1} \underbrace{n_b l_b}_{r_1} \Big| n_{\ap} l_{\ap} n_{\bp} l_{\bp} \Big\rangle
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^- \big|\tau_{\ap}\tau_{\bp}\big\rangle = \big\langle \tau_a\tau_b \big| (\bm{\tau}_k \times \bm{\tau}_l)^- \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P5(19)}{\overset{\text{[6]}}{=}} \big\langle \tau_a\tau_b \big| (\bm{\tau}_k \times \bm{\tau}_l)^x - i(\bm{\tau}_k \times \bm{\tau}_l)^y \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P68(30)}{\overset{\text{[1]}}{=}} \sqrt{2}\big\langle \tau_a\tau_b \big| (\bm{\tau}_k \times \bm{\tau}_l)^{1-1} \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P66(5)}{\overset{\text{[1]}}{=}} -2i\big\langle \tau_a\tau_b \big| [\bm{\tau}_k \otimes \bm{\tau}_l]^{1-1} \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P479(25)}{\overset{\text{[1]}}{=}} -i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{\ap} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 -1} \Big\langle \frac{1}{2} \Big\| \bm{\tau}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \bm{\tau}_l \Big\| \frac{1}{2} \Big\rangle \\
&\il = -6i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{\ap} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 -1} \\
&\il = -6i \Big( C_{\frac{1}{2} \tau_{\ap} 1 -1}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 0}^{\frac{1}{2} \tau_b}C_{1 -1 1 0}^{1 -1} + C_{\frac{1}{2} \tau_{\ap} 1 0}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 -1}^{\frac{1}{2} \tau_b}C_{1 0 1 -1}^{1 -1} \Big) \\
&\il = 4i \Big( \delta_{\tau_a,-\frac{1}{2}}\delta_{\tau_{\ap},\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b - \delta_{\tau_b,-\frac{1}{2}}\delta_{\tau_{\bp},\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big)
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \big\langle \tau_a\tau_b \big|\bm{\tau}_\times^+ \big|\tau_{\ap}\tau_{\bp}\big\rangle = \big\langle \tau_a\tau_b \big| (\bm{\tau}_k \times \bm{\tau}_l)^+ \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P5(19)}{\overset{\text{[6]}}{=}} \big\langle \tau_a\tau_b \big| (\bm{\tau}_k \times \bm{\tau}_l)^x + i(\bm{\tau}_k \times \bm{\tau}_l)^y \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P68(30)}{\overset{\text{[1]}}{=}} -\sqrt{2}\big\langle \tau_a\tau_b \big| (\bm{\tau}_k \times \bm{\tau}_l)^{1 +1} \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P66(5)}{\overset{\text{[1]}}{=}} 2i\big\langle \tau_a\tau_b \big| [\bm{\tau}_k \otimes \bm{\tau}_l]^{1+1} \big|\tau_{\ap}\tau_{\bp}\big\rangle \\
&\il \underset{P479(25)}{\overset{\text{[1]}}{=}} i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{\ap} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 1} \Big\langle \frac{1}{2} \Big\| \bm{\tau}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \bm{\tau}_l \Big\| \frac{1}{2} \Big\rangle \\
&\il = 6i \sum_{\alpha\beta}C_{\frac{1}{2} \tau_{\ap} 1 \alpha}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 \beta}^{\frac{1}{2} \tau_b}C_{1 \alpha 1 \beta}^{1 1} \\
&\il = 6i \Big( C_{\frac{1}{2} \tau_{\ap} 1 1}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 0}^{\frac{1}{2} \tau_b}C_{1 1 1 0}^{1 1} + C_{\frac{1}{2} \tau_{\ap} 1 0}^{\frac{1}{2} \tau_a} C_{\frac{1}{2} \tau_{\bp} 1 1}^{\frac{1}{2} \tau_b}C_{1 0 1 1}^{1 1} \Big) \\
&\il = 4i \Big( -\delta_{\tau_a,\frac{1}{2}}\delta_{\tau_{\ap},-\frac{1}{2}}\delta_{\tau_b,\tau_{\bp}}\tau_b + \delta_{\tau_b,\frac{1}{2}}\delta_{\tau_{\bp},-\frac{1}{2}}\delta_{\tau_a,\tau_{\ap}}\tau_a \Big)
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_\times \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle = \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| \bm{\sigma}_k \times \bm{\sigma}_l \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
&\il \underset{P66(4)}{\overset{\text{[1]}}{=}} -\sqrt{2}i \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| [\bm{\sigma}_k \otimes \bm{\sigma}_l]^1 \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
&\il \overset{(A-8)}{=} -\sqrt{2}i \sqrt{3}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \bm{\sigma}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \bm{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
&\il \overset{(A-3)}{=} -6\sqrt{6}i \hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \bm{\sigma}_k \times \hat{\bmr}\, \bm{\sigma}_l \cdot \hat{\bmr} \\
&\il \underset{P66(13)}{\overset{\text{[1]}}{=}} \sqrt{6}i \big[[\bm{\sigma}_k \otimes \hat{\bmr}]^1 \otimes [\bm{\sigma}_l \otimes \hat{\bmr}]^0\big]^1 \\
&\il \underset{P70(11)}{\overset{\text{[1]}}{=}} \sqrt{6}i \sum_{g,h=0}^2 \sqrt{3}\hat{g}\hat{h}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ 1 & 1 & 0 \\ g & h & 1 \end{array}\right\}  \big[[\bm{\sigma}_k \otimes \bm{\sigma}_l]^g \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h\big]^1 \\
&\il \underset{P357(2)}{\overset{\text{[1]}}{=}} \sqrt{6}i \sum_{g,h=0}^2 \sqrt{3}\,\hat{g}\,\hat{h}\, (-)^{h+1}\frac{1}{3}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \big[[\bm{\sigma}_k \otimes \bm{\sigma}_l]^g \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h\big]^1 \\
&\il = \sqrt{2}i \sum_{g,h=0}^2 \hat{g}\,\hat{h}\, (-)^{h+1}  \left\{\begin{array}{ccc} 1 & 1 & 1 \\ g & h & 1 \end{array}\right\}  \big[[\bm{\sigma}_k \otimes \bm{\sigma}_l]^g \otimes [\hat{\bmr} \otimes \hat{\bmr}]^h\big]^1
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [\frac{1}{2}\otimes\frac{1}{2}]^{S_{ab}} \Big\| [\bm{\sigma}_k \otimes \bm{\sigma}_l]^g \Big\| [\frac{1}{2}\otimes\frac{1}{2}]^{S_{\ap\bp}} \Big\rangle \\
&\il \overset{A-8}{=} \hat{g}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}  \Big\langle \frac{1}{2} \Big\| \bm{\sigma}_k \Big\| \frac{1}{2} \Big\rangle \Big\langle \frac{1}{2} \Big\| \bm{\sigma}_l \Big\| \frac{1}{2} \Big\rangle \\
&\il \overset{A-3}{=} 6\hat{g}\hat{S}_{ab}\hat{S}_{\ap\bp}  \left\{\begin{array}{ccc} 1 & 1 & g \\ \frac{1}{2} & \frac{1}{2} & S_{ab} \\ \frac{1}{2} & \frac{1}{2} & S_{\ap\bp} \end{array}\right\}
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [n l \otimes N L]^{L_{ab}} \Big\| r\hat{\bmr} \Big\| [n^\prime l^\prime \otimes N^\prime L^\prime]^{L_{\ap\bp}} \Big\rangle \\
&\il = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{1+l+L^\prime+L_{\ap\bp}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & 1 \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| r \Big| n^\prime l^\prime \Big\rangle  \Big\langle \underbrace{l}_{\hat{\bmr}} \Big\| \hat{\bmr} \Big\| l^\prime \Big\rangle \\
&\il = \delta_{NN^\prime}\delta_{LL^\prime}(-)^{1+l+L^\prime+L_{\ap\bp}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{ab} & L_{\ap\bp} & 1 \\ l^\prime & l & L^\prime \end{array}\right\}  \Big\langle \underbrace{n l}_{r} \Big| r \Big| n^\prime l^\prime \Big\rangle \hat{l^\prime} C_{l^\prime 0 1 0}^{l 0}
\end{aligned}
$$


$$
\begin{aligned}
& \redstar \Big\langle [n_a l_a \otimes n_b l_b]^{L_{ab}} \Big\| r_k\hat{\bmr}_k \Big\| [n_{\ap} l_{\ap} \otimes n_{\bp} l_{\bp}]^{L_{\ap\bp}} \Big\rangle \\
&\il = \delta_{n_a n_{\ap}}\delta_{l_a l_{\ap}}(-)^{1+l_{\ap}+l_{\bp}+L_{ab}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & 1 \\ l_b & l_{\bp} & l_{\ap} \end{array}\right\}  \Big\langle n_b l_b \Big\| r_k\hat{\bmr}_k \Big\| n_{\bp} l_{\bp} \Big\rangle \\
&\il = \delta_{n_a n_{\ap}}\delta_{l_a l_{\ap}}(-)^{1+l_{\ap}+l_{\bp}+L_{ab}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & 1 \\ l_b & l_{\bp} & l_{\ap} \end{array}\right\}  \Big\langle n_b l_b \Big| r_k \Big| n_{\bp} l_{\bp} \Big\rangle \Big\langle l_b \Big\| \hat{\bmr}_k \Big\| l_{\bp} \Big\rangle \\
&\il = \delta_{n_a n_{\ap}}\delta_{l_a l_{\ap}}(-)^{1+l_{\ap}+l_{\bp}+L_{ab}} \hat{L}_{ab}\hat{L}_{\ap\bp}  \left\{\begin{array}{ccc} L_{\ap\bp} & L_{ab} & 1 \\ l_b & l_{\bp} & l_{\ap} \end{array}\right\}  \Big\langle n_b l_b \Big| r_k \Big| n_{\bp} l_{\bp} \Big\rangle \hat{l_{\bp}} C_{l_{\bp} 0 1 0}^{l_b 0}
\end{aligned}
$$

## 参考文献

1. Varshalovich, D A, Moskalev, A N, Khersonskii, V K, *Quantum Theory of Angular Momentum*, WORLD SCIENTIFIC (1988).
2. Lv, W. L., Niu, Y. F., Fang, D. L., Bai, C. L., *Single-state or low-lying-states dominance mechanism of $2\nu\beta\beta$-decay nuclear matrix elements*, Phys. Rev. C 105, 044331 (2022). DOI: [10.1103/PhysRevC.105.044331](https://doi.org/10.1103/PhysRevC.105.044331).
3. Wu, M.D., Bai, C.L., Fang, D.L., Niu, Y.F., Sagawa, H., Zhang, H.Q., *Effect of tensor force on 2νββ and 0νββ decays in 76Ge, 82Se, 130Te, and 136Xe**, Chinese Physics C 49 (7), 074112 (2025). DOI: [10.1088/1674-1137/adcf8f](https://doi.org/10.1088/1674-1137/adcf8f).
4. Suhonen, Jouni, *From Nucleons to Nucleus. Concepts of Microscopic Nuclear Theory*, Springer Berlin (2013).
5. G.P. Kamuntavičius, R.K. Kalinauskas, B.R. Barrett, S. Mickevičius, D. Germanas, *The general harmonic-oscillator brackets: compact expression, symmetries, sums and Fortran code*, Nuclear Physics A 695 (1), 191-201 (2001). DOI: [10.1016/S0375-9474(01)01101-0](https://doi.org/10.1016/S0375-9474(01)01101-0).
6. Park, T.-S., Marcucci, L. E., Schiavilla, R., Viviani, M., Kievsky, A., Rosati, S., Kubodera, K., Min, D.-P., Rho, M., *Parameter-free effective field theory calculation for the solar proton-fusion and hep processes*, Phys. Rev. C 67, 055206 (2003). DOI: [10.1103/PhysRevC.67.055206](https://doi.org/10.1103/PhysRevC.67.055206).
