# Bootcamp-Node

## Download and Run

1. Clone the repo locally

```bash
git clone https://github.com/allegient-labs/bootcamp-node.git && cd bootcamp-node
```

2. Install dependencies

```bash
yarn install
```

3. Run App

```bash
yarn start
```

4. Run Tests

```bash
yarn test
```

## App Description

* Monthly Installment (EMI) Calculation formula: ![A ,=,P\cdot\frac{r(1 + r)^n}{(1 + r)^n - 1}](https://latex.codecogs.com/svg.latex?EMI%20%5C%2C%3D%5C%2CP%5Ccdot%5Cfrac%7Br%281%20%2B%20r%29%5En%7D%7B%281%20%2B%20r%29%5En%20-%201%7D)

  * `P`: principal amount
  * `r`: periodic interest rate divided by 100 (12 periods/payments in an year)
  * `n`: total numbers of payments
  * Source: https://en.wikipedia.org/wiki/Equated_monthly_installment

* Loan Application State Machine

  ![Alt text](https://g.gravizo.com/svg?digraph%20G%20%7Baize%20%3D%224%2C4%22%3Bloan_application%20%5Bshape%3Dbox%5D%3Bloan_application%20-%3E%20unsaved%20%5Bweight%3D8%2C%20label%3D%22%20user%20landed%20on%20homepage%22%5D%3Bunsaved%20-%3E%20unverified%20%5Blabel%3D%22%20user%20entered%20name%2C%20email%22%5D%3Bunverified%20-%3E%20in_progress%20%5Blabel%3D%22%20user%20clicked%20email%20link%22%5D%3Bin_progress%20-%3E%20in_review%20%5Blabel%3D%22%20application%20sent%20to%20underwriter%22%5D%3Bin_review%20-%3E%20%7Brejected%2C%20approved%7D%3Brejected%20-%3E%20in_progress%3Bapproved%20-%3E%20paid%20%5Blabel%3D%22%20loan%20amount%20is%20paid%20to%20user%22%5D%3B%7D)

<details><summary>State Machine as text</summary>
![Alt text](https://g.gravizo.com/svg?
digraph G {
aize ="4,4";
loan_application [shape=box];
loan_application -> unsaved [weight=8, label=" user landed on homepage"];
unsaved -> unverified [label=" user entered name, email"];
unverified -> in_progress [label=" user clicked email link"];
in_progress -> in_review [label=" application sent to underwriter"];
in_review -> {rejected, approved};
rejected -> in_progress;
approved -> paid [label=" loan amount is paid to user"];
})
</details>
