// ------ Declaring Data Types. ----------
let sales = 126_372_825;
let course = 'Typescript Course';
let is_published = true;
let level;
let numbersFirst: number[] = [1, 2, 3, 5];
let numbersSecond: number[] = [];
let user: [number, string] = [19, 'Jorge']

// ------ Enum variables. ----------

// const small = 1;
// const medium = 2;
// const large = 3;

const enum CustomSize { Small = 1, Medium, Large }
let mySize: CustomSize = CustomSize.Medium;
console.log(mySize);

// ------ Functions. ----------

function calculateTax(income: number, tax = 2022): number {
  if (tax < 2022)
    return income * 10;
  return income;
}

calculateTax(24)

// ------ Objects. ----------

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: 'Martha',
  retire: (date: Date) => {
    console.log(date)
  }
}

console.log(employee.id)
console.log(employee.name)
employee.retire(new Date())

// ----------- Union Types -------------
function kgToLbs(weight: number | string): number {
  // Narrowing

  if(typeof weight === 'number')
    return weight * 2
  else
    return parseInt(weight) * 5
}

kgToLbs(10)
kgToLbs('10')

// ---------- Intersection --------------
type Draggable = {
  drag: () => void
};

type Reziable = {
  resize: () => void
}

type UIWidget = Draggable & Reziable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// -------- Literal Types -------------
type QuantityNumber = 50 | '50'
let quantity: QuantityNumber = '50';

type CustomMetric = 'cm' | 'ft' | 'in';
let metric: CustomMetric = 'ft'

// ---------- Null and Undefined values ---------

function sayName(name: string | undefined | null) {
  console.log(name)
}

sayName(null)
