import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/categorybutton';
import { MovieCard } from '../components/MovieCard';
import popularImg from '../assets/images/이미지1.jpeg';
import nowPlayingImg from '../assets/images/이미지2.jpeg';

const API_KEY = '1dea7e575cd304307a1cedcfaa5d53b7';

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

export type Category = {
  id: number;
  label: string;
  url: string;
  image: string; 

};

const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular', iamge:popularImg },
  { id: 1, label: '현재 상영작', url: '/now_playing', image:nowPlayingImg },
];

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const setCategory = (index: number) => {
    setCategoryIndex(index);
  };

  const getData = async (categoryIndex: number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } else {
      throw new Error('데이터를 받아오지 못했습니다.');
    }
    setIsLoading(false)
  };

  useEffect(() => {
    getData(categoryIndex);
  }, [categoryIndex]);

  return (
    <div className="m-4 p-4 space-y-20">
      <div className="space-y-4">
        <div className="bg-cover bg-no-repeat bg-center rounded-2xl border border-ivory h-96 w-full bg-[url('https://file.mk.co.kr/meet/neds/2022/03/image_readtop_2022_212567_16466226824966984.jpg')]">
          <div className="space-y-1 pt-72 pl-8">
            <div className="text-2xl font-bold text-ivory">인테리어 맛집</div>
            <div className="text-md text-ivory2">구경해보세요.</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-3xl font-bold text-darkbrown">Category</div>
        <div className="flex space-x-6">
          {CATEGORY_LIST.map((data) => (
            <CategoryButton 
            key = {data.id} 
            category ={data} 
            onClick={setCategory}
            isSelected={data.id === categoryIndex}  />
          ))}
        </div>
      </div>

      {/* <div className="space-y-4">
        <div className="text-3xl font-bold text-darkbrown">List</div>

        <div className="space-y-4 border border-brown p-4 rounded-md">
          <img
            src="https://og-data.s3.amazonaws.com/media/artstory/post_image/107/3.jpg"
            alt=""
            className="rounded-2xl w-full object-cover h-80"
          />
          <div>
            <div className="font-bold text-2xl text-darkbrown mb-2">
              Card title
            </div>
            <div className="text-ivory2 text-md h-32 whitespace-pre-line">
              저희 회사에서 가구를 구매하셨나요? 프리미엄 회원이 되셔서
              인테리어를 받아보세요. <br />전 세계 어디서도 볼 수 없는 당신만을
              위한 디자인을 해드립니다.
            </div>
            <div className="flex space-x-2 justify-end">
              <div className="bg-ivory text-darkbrown text-center rounded-md border border-brown h-12 py-3 px-5">
                button
              </div>
              <div className="text-center py-3 px-5 text-darkbrown border-brown rounded-md h-12 border">
                button
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="space-y-4">
        <div className="text-3xl text-darkbrown font-bold">List</div>
        <div className="space-y-3">
          {!isLoading && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-3xl text-darkbrown font-bold">List</div>
        <div className="space-y-2 border border-brown rounded-md">
          <img
            src="http://cms.ewha.ac.kr/user/dorm/sprofile/8442381_4_1485238042974.jpg"
            alt=""
            className="w-full object-cover h-80"
          />
          <div className="p-4 space-y-3">
            <div className="font-bold text-2xl text-darkbrown">
              EWHA E-House Interior
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDlfMjk5/MDAxNDkxNzI3MTQzMjM1.elWi5Fs1y3ekD0MycDqAMrlXfxLApNvdagkZB97f9HIg.r-xIWl7NQFAlOZakMipCNx8uvNSAbOiz5OWaASeLCu0g.PNG.kyojjong/%EC%9D%B4%ED%99%94%EC%97%AC%EB%8C%80.png?type=w800"
                alt=""
                className="rounded-full h-10 w-10 border border-ivory"
              />
              <div className="font-semibold text-darkbrown">EWHA Interior</div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #이화여대
              </div>
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #Ewha
              </div>
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #인테리어
              </div>
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #기숙사
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
