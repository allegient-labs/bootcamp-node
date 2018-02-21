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

### Principle and Interest (P&I) Calculation

Monthly Installment (EMI) Calculation formula: ![A ,=,P\cdot\frac{r(1 + r)^n}{(1 + r)^n - 1}](https://latex.codecogs.com/svg.latex?EMI%20%5C%2C%3D%5C%2CP%5Ccdot%5Cfrac%7Br%281%20%2B%20r%29%5En%7D%7B%281%20%2B%20r%29%5En%20-%201%7D)

* `P`: principal amount
* `r`: periodic interest rate divided by 100 (12 periods/payments in an year)
* `n`: total numbers of payments
* Source: https://en.wikipedia.org/wiki/Equated_monthly_installment

### Loan Approval Algorithm

1. Calculate total payment

   Total Monthly Payment = P&I (from above formula + (Property Taxes / 12) + (Insurance / 12)

2. If loan downpayment < 20%

   * Private Mortgage Insurance (PMI) = loan amount \* 0.01 / 12
   * Total monthly payment += PMI

3. Approval is based on total payment, credit score and monthly income...

   If Credit score >= 750

   * If total payment <= 28% of monthly income -> approved, best interest rate
   * If total payment > 28% <= 35% of monthly income -> approved, secondary interest rate
   * If total payment > 35% of monthly income -> denied

   If 600 <= Credit score < 750

   * If total payment <= 28% of monthly income -> approved, secondary interest rate
   * If total payment > 28% of monthly income -> denied

   If Credit score < 600 -> denied

### Loan Application State Machine

![Loan Application State Machine](https://g.gravizo.com/svg?digraph%20G%20%7Bloan_application%20%5Bshape%3Dbox%5D%3Bloan_application%20-%3E%20unsaved%20%5Bweight%3D8%2C%20label%3D%22%20user%20landed%20%5Cn%20on%20homepage%22%5D%3Bunsaved%20-%3E%20unverified%20%5Blabel%3D%22%20user%20entered%20%5Cn%20name%2C%20email%22%5D%3Bunverified%20-%3E%20in_progress%20%5Blabel%3D%22%20user%20clicked%20%5Cn%20link%20in%20email%22%5D%3Bin_progress%20-%3E%20in_review%20%5B%20label%3D%22application%20sent%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Cn%20to%20underwriter%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%5D%3Bin_review%20-%3E%20rejected%3Bin_review%20-%3E%20approved%3Brejected%20-%3E%20in_progress%3Bapproved%20-%3E%20paid%20%5Blabel%3D%22%20loan%20amount%20is%5Cnpaid%20to%20user%22%5D%3B%7D)

<details>
<summary>State Machine as text</summary>

Tip:

* Using http://www.gravizo.com/ to create this graph.
* URL-encode the `diagraph` query before using it in the actual image link.

```
![Loan Application State Machine](https://g.gravizo.com/svg?
    digraph G {
        loan_application [shape=box];
        loan_application -> unsaved [weight=8, label=" user landed \n on homepage"];
        unsaved -> unverified [label=" user entered \n name, email"];
        unverified -> in_progress [label=" user clicked \n link in email"];
        in_progress -> in_review [
            label="application sent                   \n to underwriter                    "
        ];
        in_review -> rejected;
        in_review -> approved;
        rejected -> in_progress;
        approved -> paid [label=" loan amount is \n paid to user"];
    }
)
```

</details>
