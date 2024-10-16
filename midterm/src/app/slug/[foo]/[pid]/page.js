

export default function Slug({ params }) {
    const { foo, pid } = params;
  
    return (
      <div>
        <h1>C:\React3-1\midterm\src\app\slug\[foo]\[pid]\page.js</h1>

        <h1>foo: {foo}</h1>
        <h1>pid: {pid}</h1>
        
      </div>
    );
  }