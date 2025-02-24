# The Shop Website by Reactjs.

Hello everyone, in this project : 
I tried to complete this project by using the popular JavaScript framework , Reactjs
and by using the TypeScript language, Tailwind framework, and [Material UI](https://mui.com/material-ui/). 🔥

### main page

![image 1](/src/images/readme/mainpage1.png)

![image 2](/src/images/readme/mainpage2.png)

### Store page

![image 3](/src/images/readme/Store.png)

## Project features

1. User data is stored in local storage during purchase and is not lost when refreshing or leaving the site!😉
2. just 11 line css code 🤯 (often by tailwind).
3. 6 page by react-router-dom.
4. this project completely written by typescript. 
5. API and data available on the site, due to the lack of a backend developer, fake api is used, which is available in the Json file.
6. After adding the product, the user can go to the shopping cart and view his product, add or remove it if needed.

## Features that will be added in the future:

- Responsive

## Part of App.tsx
```Javascript
function App() {
  const {login} = useAppContext()
  return (
      <>
        <Layout >
          <NavbarSite />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/store' element={<Store />} />
            <Route path='/clothes' element={<Clothes />} />
            <Route path='/electrics' element={<Electrics />} />
            <Route path='/login' element={ login ? <Navigate to={"/"} /> :<Login />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route element={<PrivateRoute />}>
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
          <Footer />
        </Layout>
      </>
  );
}

export default App;
```

### for run db.json
 
``` npx json-server db.json -p 8001 ```

## For more :
[github](https://github.com/mjmajlesi) <br>
[telegram](https://t.me/Mj_majlesi)
