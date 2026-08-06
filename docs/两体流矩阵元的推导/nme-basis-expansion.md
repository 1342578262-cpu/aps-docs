# 球谐振子基下展开（Basis Expansion）
## 谐振子基展开思路
要推导两体流算符的两体矩阵元，我们需要把描述单粒子波函数的绝对坐标系变换到 Jacobi 坐标系（即 Moshinsky 变换）。但由于QRPA或QPVC程序给出的单粒子波函数是依赖于坐标空间的函数，因此有必要采用基展开的方法，把它投影到球谐振子基上。

对于两粒子体系，定义 $\psi_{n_a l_a j_a m_a \tau_a}(\textbf{\textit{r}}) = \sum\limits_{n l j m} c_{nljm}^{n_a l_a j_a m_a \tau_a} \phi_{nljm}(\textbf{\textit{r}})$，其中 $\phi_{nljm}(\textbf{\textit{r}})$ 是谐振子波函数。


$$
\begin{align}
|\psi\rangle &= \sum_{i} |\phi_i\rangle \langle\phi_i| \cdot |\psi\rangle \\
&= \sum_{i} \int_{\textbf{\textit{r}}^{\prime}}\int_{\textbf{\textit{r}}^{\prime\prime}} |\textbf{\textit{r}}^{\prime\prime} \rangle \langle \textbf{\textit{r}}^{\prime\prime} |\phi_i\rangle \langle \phi_i|\textbf{\textit{r}}^{\prime}\rangle \langle \textbf{\textit{r}}^{\prime}|\psi\rangle \\
&= \sum_{i} \int_{\textbf{\textit{r}}^{\prime}}\int_{\textbf{\textit{r}}^{\prime\prime}} |\textbf{\textit{r}}^{\prime\prime} \rangle \phi_i(\textbf{\textit{r}}^{\prime\prime}) \phi_i^\dagger(\textbf{\textit{r}}^{\prime}) \psi(\textbf{\textit{r}}^{\prime})
\end{align}
$$

在上述方程两边左乘 $\langle \textbf{\textit{r}}|$


$$
\begin{align}
\langle \textbf{\textit{r}}|\psi\rangle = \sum_{i} \int_{\textbf{\textit{r}}^{\prime}}\int_{\textbf{\textit{r}}^{\prime\prime}} \langle \textbf{\textit{r}}|\textbf{\textit{r}}^{\prime\prime} \rangle \phi_i(\textbf{\textit{r}}^{\prime\prime}) \phi_i^\dagger(\textbf{\textit{r}}^{\prime}) \psi(\textbf{\textit{r}}^{\prime})
\end{align}
$$

于是可以得到


$$
\begin{align}
& \psi_j(\textbf{\textit{r}}) = \sum_{i} {\color{red} \int_{\textbf{\textit{r}}^\prime} \phi_i^\dagger(\textbf{\textit{r}}^{\prime}) \psi_j(\textbf{\textit{r}}^{\prime})} \phi_i(\textbf{\textit{r}}) = \psi_{n_j l_j j_j m_j \tau_j}(\textbf{\textit{r}}) = \sum_{i} {\color{red} c_i^j} \phi_i(\textbf{\textit{r}}) \\
=& \sum_{n_i l_i j_i m_i} {\color{red} \int_{\textbf{\textit{r}}^\prime} \phi_{n_i l_i j_i m_i}^\dagger(\textbf{\textit{r}}^{\prime}) \psi_{n_j l_j j_j m_j \tau_j}(\textbf{\textit{r}}^{\prime})} \phi_{n_i l_i j_i m_i}(\textbf{\textit{r}}) = \sum_{n_i l_i j_i m_i} {\color{red} c_{n_i l_i j_i m_i}^{n_j l_j j_j m_j \tau_j}} \phi_{n_i l_i j_i m_i}(\textbf{\textit{r}}) \\
=& \sum_{n_i l_i j_i m_i} {\color{red} \int_{\textbf{\textit{r}}^\prime} \Big( \eta_i g_{n_i l_i}(r^\prime)\sum_{m_{l_i}m_{s_i}}C_{l_i m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} Y_{l_i m_{l_i}}(\hat{\textbf{\textit{r}}^\prime}) \chi_{\frac{1}{2} m_{s_i}} \chi_{\frac{1}{2} m_{\tau_i}} \Big)^{\!\dagger}} \notag \\
& {\color{red}\cdot\Big( \eta_j u_{n_j l_j \tau_j}(r^\prime)\sum_{m_{l_j}m_{s_j}}C_{l_j m_{l_j} \frac{1}{2} m_{s_j}}^{j_j m_j} Y_{l_j m_{l_j}}(\hat{\textbf{\textit{r}}^\prime}) \chi_{\frac{1}{2} m_{s_j}} \chi_{\frac{1}{2} m_{\tau_j}} \Big)d\textbf{\textit{r}}^\prime} \phi_{n_i l_i j_i m_i}(\textbf{\textit{r}}) \\
=& \sum_{n_i l_i j_i m_i} {\color{red} \sum_{m_{l_i}m_{s_i}m_{l_j}m_{s_j}} \eta_i^\ast \eta_j C_{l_i m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} C_{l_j m_{l_j} \frac{1}{2} m_{s_j}}^{j_j m_j} \int_{r^\prime} g^\ast_{n_i l_i}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime} \notag \\
& {\color{red}\int_{\hat{{\textbf{\textit{r}}}^\prime}}Y^\ast_{l_i m_{l_i}}(\hat{\textbf{\textit{r}}^\prime}) Y_{l_j m_{l_j}}(\hat{\textbf{\textit{r}}^\prime})d\hat{\textbf{\textit{r}}^\prime} \chi^\dagger_{\frac{1}{2} m_{s_i}} \chi_{\frac{1}{2} m_{s_j}} \chi^\dagger_{\frac{1}{2} m_{\tau_i}} \chi_{\frac{1}{2} m_{\tau_j}} } \phi_{n_i l_i j_i m_i}(\textbf{\textit{r}}) \\
=& \sum_{n_i l_i j_i m_i} {\color{red} \sum_{m_{l_i}m_{s_i}m_{l_j}m_{s_j}}\eta_i^\ast \eta_j C_{l_i m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} C_{l_j m_{l_j} \frac{1}{2} m_{s_j}}^{j_j m_j} \int_{r^\prime} g^\ast_{n_i l_i}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{l_i l_j}\delta_{m_{l_i}m_{l_j}} \delta_{m_{s_i} m_{s_j}}\delta_{m_{\tau_i} m_{\tau_j}} } \phi_{n_i l_i j_i m_i}(\textbf{\textit{r}}) \\
=& \sum_{n_i j_i m_i} {\color{red} \sum_{m_{l_i}m_{s_i}} |\eta_j|^2  C_{l_j m_{l_i} \frac{1}{2} m_{s_i}}^{j_i m_i} C_{l_j m_{l_i} \frac{1}{2} m_{s_i}}^{j_j m_j} \int_{r^\prime} g^\ast_{n_i l_j}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{m_{\tau_i} m_{\tau_j}}} \phi_{n_i l_j j_i m_i}(\textbf{\textit{r}}) \\
=& \sum_{n_i j_i m_i} {\color{red} \delta_{j_i j_j}\delta_{m_i m_j} \int_{r^\prime} g^\ast_{n_i l_j}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{m_{\tau_i} m_{\tau_j}}} \phi_{n_i l_j j_i m_i}(\textbf{\textit{r}}) \\
=& \sum_{n_i} {\color{red} \int_{r^\prime} g^\ast_{n_i l_j}(r^\prime)u_{n_j l_j \tau_j}(r^\prime)r^{\prime 2} dr^\prime \delta_{m_{\tau_i} m_{\tau_j}}} \phi_{n_i l_j j_j m_j}(\textbf{\textit{r}})
\end{align}
$$

## 单体矩阵元
对于任意单体矩阵元，我们可以用下面的方法进行推导和计算。
$$
\begin{align}
& \langle \bar{a} \| \mathcal{M}_{1b}^{\lambda} \| \bar{b} \rangle = \Big\langle n_a l_a j_a \tau_a \Big\| \mathcal{M}_{1b}^{\lambda} \Big\| n_b l_b j_b \tau_{b} \Big\rangle \\
& = \frac{\hat{j}_a}{C_{j_b m_b 1 \mu}^{j_a m_a}} \Big\langle n_a l_a j_a m_a \tau_a \Big| \mathcal{M}_{1b}^{\lambda \mu} \Big| n_b l_b j_b m_b \tau_{b} \Big\rangle \\
& = \sum_{n_1 n_2} c_{n_1}^{n_{a}} c_{n_2}^{n_{b}} \frac{\hat{j}_a}{C_{j_b m_b 1 \mu}^{j_a m_a}} \Big\langle n_1 l_a j_a m_a \tau_a \Big| \mathcal{M}_{1b}^{\lambda \mu} \Big| n_2 l_b j_b m_b \tau_{b} \Big\rangle \\
& = \sum_{n_1 n_2} c_{n_1}^{n_{a}} c_{n_2}^{n_{b}} \Big\langle n_1 l_a j_a \tau_a \Big\| \mathcal{M}_{1b}^{\lambda} \Big\| n_2 l_b j_b \tau_{b} \Big\rangle
\end{align}
$$

## 两体矩阵元
对于任意两体矩阵元，我们可以用下面的方法进行推导和计算。
$$
\begin{align}
& \Big\langle \bar{a} \bar{a^\prime} \Big\|^{J_{aa^\prime}} \mathcal{M}_{2b}^{\lambda} \Big\| \bar{b} \bar{b^\prime} \Big\rangle^{J_{bb^\prime}} = \Big\langle n_a l_a j_a \tau_a, n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime} \Big\|^{J_{aa^\prime}} \mathcal{M}_{2b}^{\lambda} \Big\| n_b l_b j_b \tau_{b}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{bb^\prime}} \notag \\
& = \frac{\hat{J}_{aa^\prime}}{C_{J_{bb^\prime} M_{bb^\prime} \lambda \mu}^{J_{aa^\prime} M_{aa^\prime}}} \Big\langle n_a l_a j_a \tau_a, n_{a^\prime} l_{a^\prime} j_{a^\prime} \tau_{a^\prime} \Big|^{J_{aa^\prime} M_{aa^\prime}} \mathcal{M}_{2b}^{\lambda \mu} \Big| n_b l_b j_b \tau_{b}, n_{b^\prime} l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{bb^\prime} M_{bb^\prime}} \\
& = \frac{\hat{J}_{aa^\prime}}{C_{J_{bb^\prime} M_{bb^\prime} \lambda \mu}^{J_{aa^\prime} M_{aa^\prime}}} \sum_{m_a m_{a^\prime} m_b m_{b^\prime}} \!\!\!C_{j_a m_a j_{a^\prime} m_{a^\prime}}^{J_{aa^\prime} M_{aa^\prime}} C_{j_b m_b j_{b^\prime} m_{b^\prime}}^{J_{bb^\prime} M_{bb^\prime}} \Big\langle n_a l_a j_a m_a \tau_a, n_{a^\prime} l_{a^\prime} j_{a^\prime} m_{a^\prime} \tau_{a^\prime} \Big| \mathcal{M}_{2b}^{\lambda \mu} \Big| n_b l_b j_b m_b \tau_{b}, n_{b^\prime} l_{b^\prime} j_{b^\prime} m_{b^\prime} \tau_{b^\prime} \Big\rangle \\
& = \sum_{n_1 n_2 n_3 n_4} c_{n_1}^{n_{a}} c_{n_2}^{n_{a^\prime}} c_{n_3}^{n_{b}} c_{n_4}^{n_{b^\prime}} \frac{\hat{J}_{aa^\prime}}{C_{J_{bb^\prime} M_{bb^\prime} \lambda \mu}^{J_{aa^\prime} M_{aa^\prime}}} \sum_{m_a m_{a^\prime} m_b m_{b^\prime}} C_{j_a m_a j_{a^\prime} m_{a^\prime}}^{J_{aa^\prime} M_{aa^\prime}} C_{j_b m_b j_{b^\prime} m_{b^\prime}}^{J_{bb^\prime} M_{bb^\prime}} \notag \\
& \cdot \Big\langle n_1 l_a j_a m_a \tau_a, n_2 l_{a^\prime} j_{a^\prime} m_{a^\prime} \tau_{a^\prime} \Big| \mathcal{M}_{2b}^{\lambda \mu} \Big| n_3 l_b j_b m_b \tau_{b}, n_4 l_{b^\prime} j_{b^\prime} m_{b^\prime} \tau_{b^\prime} \Big\rangle \\
& = \sum_{n_1 n_2 n_3 n_4} c_{n_1}^{n_{a}} c_{n_2}^{n_{a^\prime}} c_{n_3}^{n_{b}} c_{n_4}^{n_{b^\prime}} \Big\langle n_1 l_a j_a \tau_a, n_2 l_{a^\prime} j_{a^\prime} \tau_{a^\prime} \Big\|^{J_{aa^\prime}} \mathcal{M}_{2b}^{\lambda} \Big\| n_3 l_b j_b \tau_{b}, n_4 l_{b^\prime} j_{b^\prime} \tau_{b^\prime} \Big\rangle^{J_{bb^\prime}}
\end{align}
$$

