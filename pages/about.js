import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  );
}