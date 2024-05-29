// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getItems() {
  const res = await fetch('/data/items.json');
  const data = await res.json();
  console.log('data', data)
  return data
}
