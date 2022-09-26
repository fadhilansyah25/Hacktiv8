# Single App Page With React Router

## Single App Page

SPA (Aplikasi satu halaman) adalah implementasi aplikasi web yang memuat hanya satu dokumen web, dan kemudian memperbarui konten isi dokumen tunggal tersebut melalui API JavaScript seperti XMLHttpRequest dan Fetch ketika konten yang berbeda akan ditampilkan.

Oleh karena itu, ini memungkinkan pengguna untuk menggunakan situs web tanpa memuat halaman baru dari server, yang dapat menghasilkan peningkatan kinerja dan pengalaman yang lebih dinamis, dengan beberapa kerugian tradeoff seperti SEO, lebih banyak upaya yang diperlukan untuk mempertahankan status, menerapkan navigasi, dan melakukan pemantauan kinerja yang berarti.

<div align="center">

![SPA vs Multi Page](docs/SPA%20Lifecycle%20vs%20Tradiotional%20Page%20Lifecycle.png)

</div>

<br/>

## React Router

React router adalah library javascript yang tujuannya adalah untuk memudahkan kita dalam membuat aplikasi web yang memiliki banyak halaman. React router akan memanfaatkan fitur SPA (Single Page Application) yang dimiliki oleh React untuk membuat halaman yang berbeda pada aplikasi web kita.

#### Instalasi

```bash
npm install react-router-dom
```

### Primary Components

Ada 3 komponen utama yang digunakan dalam react router, yaitu:

1. Router, yaitu <BrowserRouter>
2. Route, yaitu <Route> yang akan menjadi nested component dari <Routes>
3. Navigation, di antaranya adalah <Link>, <NavLink>, dan <Redirect> 

BrowserRouter harus menjadi element paling atas untuk membungkus App ATAU content dari App

### Implementasi

Pada langkah pertama pada file index.js, kita akan mengimport BrowserRouter dari react-router-dom dan mengaplikasikannya pada App.

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

Kemudian pada file App.js, kita akan mengimport Route dari react-router-dom dan mengaplikasikannya pada component yang akan kita buat.

```jsx
// App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
```

Selanjutnya kita membuat komponen navbar yang akan kita gunakan untuk navigasi antar halaman.

```jsx
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
```

### Nested Routes

Nested routes adalah cara untuk membuat route yang berada di dalam route lainnya.

```jsx
// App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}>
            <Route path="/about/history" component={History} />
            <Route path="/about/location" component={Location} />
            <Route path="/about/services" component={Services} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
```

kemudian pada halaman About.js, kita akan membuat komponen untuk menampilkan halaman history, location, dan services.

```jsx
// About.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="history">History</Link>
      <Link to="location">Location</Link>
      <Link to="services">Services</Link>
      <Outlet />
    </div>
  );
}

export default About;
```

### URL Parameters

URL parameters adalah cara untuk mengirimkan data ke halaman yang berbeda.

```jsx
// App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}>
            <Route path="/about/history" component={History} />
            <Route path="/about/location" component={Location} />
            <Route path="/about/services" component={Services} />
        </Route>
        <Route path="/product/:id" component={Product} />
      </Routes>
    </div>
  );
}

export default App;
```

kemudian pada halaman Product.js, kita akan membuat komponen untuk menampilkan halaman product.

```jsx
// Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}

export default Product;
```

### Programmatic Navigation

Bagaimana jika kita akan mengolah data yang dinamis ? Sebagai contoh, data hasil pemanggilan dari API ? Maka kita bisa memanfaatkan programmatic navigation untuk melakukan navigasi secara dinamis. Pada contoh kasus kali ini, kita akan menggunakan sebuah file yang berisi data array of object sebagai simulasi dari hasil return dari sebuah API call. Kemudian, kita akan menampilkan detail masing-masing item ke dalam 1 buah komponen saja secara programmatic

1. Pertama membuat file item.js yang berisi data array of object

```js
// item.js

let items = [
    {
        id: 1,
        name: 'God of Blade',
        power: 1000,
    },
    {
        id: 2,
        name: 'Supreme Dagger',
        power: 2000,
    },
    {
        id: 3,
        name: 'Hollow Axes',
        power: 3000,
    }
]

export function getItems() {
    return items;
}

```

2. Membuat halaman item untuk menampilkan list item

```jsx
// ItemsPage.jsx
import { Outlet } from 'react-router-dom';
import { getItems } from '../item';
import ItemRow from './ItemRow';

export default function Items() {
    let items = getItems();
    return (
        <div>
            <h1>Items Page</h1>
            <p>select an item to be shown</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Power</th>
                </tr>
                {items.map((item) => (
                    <ItemRow key={item.id} item={item} />
                ))}
            </table>

            <Outlet />
        </div>
    )
}
```

3. Membuat komponen ItemRow untuk menampilkan list item

```jsx
// ItemRow.jsx
import { useNavigate } from 'react-router-dom';

export default function ItemRow({ item }) {
    let navigate = useNavigate();
    return (
        <tr> 
            <td>{item.name}</td>
            <td>
                <button onClick={() => navigate(`${item.id}`)}>
                    Show Detail
                </button>
            </td>
        </tr>
    )
}
```

4. Membuat halaman item detail

```jsx
// ItemDetail.jsx
import { useParams } from 'react-router-dom';
import { getItems } from '../item';

export default function ItemDetail() {
    let { id } = useParams();
    let item = getItems().find((i) => i.id === parseInt(id));
    return (
        <div>
            <h1>{item.name}</h1>
            <p>Power: {item.power}</p>
        </div>
    )
}
```

5. Pada halaman App.js, kita akan menambahkan route untuk halaman item dan item detail

```jsx
// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About, { AboutContent, AboutSent } from "./pages/About";
import ItemsPage from "./pages/ItemPage/ItemsPage";
import ItemDetail from "./pages/ItemPage/ItemDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>}>
          <Route path=":aboutId" element={<AboutContent></AboutContent>} />
          <Route path="sent" element={<AboutSent></AboutSent>} />
        </Route>
        <Route path="/item" element={<ItemsPage />}>
          <Route path=":id" element={<ItemDetail />} />
        </Route>
      </Routes>
    </>
  );
}

```

6. Update Navbar.js

```jsx
// Navbar.js
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/items">Item</Link>
    </Nav>
  );
}
```

### Protected Routes

Sudah menjadi kebutuhan standard dalam pengembangan aplikasi, bahwa akan ada fitur atau halaman yang hanya bisa diakses oleh user tertentu. Dan penentu akses ini adalah melalui login. Kita akan implementasi flow login sederhana, dimana fitur atau halaman Items hanya bisa dilihat oleh user yang sudah login.

1. Membuat komponen protected route

```jsx
// ProtectedRoute.jsx

import { useLocation, Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    let location = useLocation();

    if(!localStorage.getItem("token")) {
        return <Navigate to="/login" state={{from: location}} />
    }

    return children;
}
```

2. Membuat halaman login

```jsx
// Login.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";

export default function Login() {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.state?.from?.pathname || "/";

    const handleLogin = () => {
        localStorage.setItem("token", "12345");
        navigate(from, { replace: true });
    }

    useEffect(() => {
      if (localStorage.getItem("token")) {
        navigate(from, { replace: true });
      }
    }, [from, navigate]);

    return (
        <div>
          <h1>Login Page</h1>
          <p>Klik the button to login</p>
            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
            Login
            </button>
        </div>
    )
}

```

3. Update App.js

```jsx
// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About, { AboutContent, AboutSent } from "./pages/About";
import ItemsPage from "./pages/ItemPage/ItemsPage";
import ItemDetail from "./pages/ItemPage/ItemDetails";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>}>
          <Route path=":aboutId" element={<AboutContent></AboutContent>} />
          <Route path="sent" element={<AboutSent></AboutSent>} />
        </Route>
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <ItemsPage />
            </ProtectedRoute>
          }
        >
          <Route path=":id" element={<ItemDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

```

4. Update Navbar

```jsx
// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |
      <Link to="/items">Item</Link>
      {localStorage.getItem("token") && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </Nav>
  );
}

```

