```javascript
// pages/about.js

export default function About() {
  const data = [1,2,3,4];
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.toString()}>{item}</li> //Solution: added .toString() to the key prop
        ))}
      </ul>
    </div>
  );
}
```