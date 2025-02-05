import { CardDepositIcon, PaypalIcon, UserPaymentIcon } from "../../components/icons";

export interface CardProps {
  variant: "dark" | "light";
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
}

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  icon: any;
  iconBg: string;
}

export const mockCards: CardProps[] = [
  {
    variant: "dark",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
  },
  {
    variant: "light",
    balance: 3405,
    cardHolder: "Eddy Cusuma",
    cardNumber: "4555 **** **** 9876",
    validThru: "11/24",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    title: "Deposit from my",
    date: "28 January 2021",
    amount: -850,
    icon: CardDepositIcon,
    iconBg: "bg-[#FFF6E9]",
  },
  {
    id: "2",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: PaypalIcon,
    iconBg: "bg-[#EDF0FF]",
  },
  {
    id: "3",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: UserPaymentIcon,
    iconBg: "bg-[#E7EDFF]",
  },
];

export async function fetchCardsAndTransactions() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    cards: mockCards,
    transactions: mockTransactions,
  };
} 