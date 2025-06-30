import BudgetForm from './components/BudgetForm';
import { useBudget } from './hooks/useBudget';

export default function App() {
  const { state, dispatch } = useBudget();
  console.log(state);
  return (
    <>
      <header className='bg-blue-500 py-8 max-h-72'>
        <h1 className='text-4xl text-white text-center font-black uppercase'>Planificador de gastos</h1>
      </header>

      <section className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10'>
        <BudgetForm />
      </section>
    </>
  );
}
