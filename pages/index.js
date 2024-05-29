import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import getItems from './api';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const data = await getItems();
    setItems(data)
  }, []);

  console.log('items', items)
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Items List</h1>
        <div className="flex items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.length !== undefined && items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}