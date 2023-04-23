import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // getMovies(); HTTP запит
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
    </main>
  );
};

export default Home;

// /trending/get - trending список найпопулярніших фільмів на сьогодні
//  для створення колекції на головній сторінці.