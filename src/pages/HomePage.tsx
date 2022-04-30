import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/categorybutton';
import { MovieCard } from '../components/MovieCard';
import popularImg from '../assets/images/이미지1.jpg';
import nowPlayingImg from '../assets/images/이미지2.jpg';
import getUpComingImg from '../assets/images/이미지3.jpg';

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
  { id: 0, label: '인기있는영화', url: '/popular', image:popularImg },
  { id: 1, label: '현재 상영작', url: '/now_playing', image:nowPlayingImg },
  { id: 2, label: '개봉 예정작', url: '/upcoming', image:getUpComingImg}
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
        <div className="bg-cover bg-no-repeat bg-center rounded-2xl border border-ivory h-96 w-full bg-[url('data:image/jpeg;base64,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')]">
          <div className="space-y-1 pt-40 pl-8">
            <div className="text-4xl font-bold text-ivory">영화 맛집</div>
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
        <div className="text-3xl text-darkbrown font-bold">Movie Theaters</div>
        <div className="space-y-2 border border-brown rounded-md">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-full h-80"
          />
          <div className="p-4 space-y-3">
            <div className="font-bold text-2xl text-darkbrown">
              EWHA ArtHouse MOMO
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDlfMjk5/MDAxNDkxNzI3MTQzMjM1.elWi5Fs1y3ekD0MycDqAMrlXfxLApNvdagkZB97f9HIg.r-xIWl7NQFAlOZakMipCNx8uvNSAbOiz5OWaASeLCu0g.PNG.kyojjong/%EC%9D%B4%ED%99%94%EC%97%AC%EB%8C%80.png?type=w800"
                alt=""
                className="rounded-full h-10 w-10 border border-ivory"
              />
              <div className="font-semibold text-darkbrown">EWHA movie</div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #이화여대
              </div>
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #Ewha
              </div>
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #영화
              </div>
              <div className="bg-ivory rounded-full py-1 px-2 text-sm text-brown">
                #아트하우스
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
