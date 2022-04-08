import React from 'react';

export const HomePage = () => {
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
          <div className="space-y-2">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center text-darkbrown font-bold">소파</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2h3HP5MKCQfvP-Ixf2P7JtgYXeGPJDUmig&usqp=CAU"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center text-darkbrown font-bold">책상</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eCoeYhV7WjT-qZ9kL3zY7odZTqZqIvCmsg&usqp=CAU"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center text-darkbrown font-bold">의자</div>
          </div>
          <div className="space-y-2">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center text-darkbrown font-bold">침대</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
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
            <div className="text-ivory2 text-md h-32">
              저희 회사에서 가구를 구매하셨나요? 프리미엄 회원이 되셔서
              인테리어를 받아보세요. <br/>
              전 세계 어디서도 볼 수 없는 당신만을 위한
              디자인을 해드립니다.
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
      </div>

      <div className="space-y-4">
        <div className="text-3xl text-darkbrown font-bold">List</div>
        <div className="space-y-3">
          <div className="flex space-x-3">
            <img
              src="https://nimg.lfmall.co.kr/file/product/prd/H126/2019/640/H126XX00052_00.jpg?2021-06-23T17:21:16.000+09:00"
              alt=""
              className="h-36 w-28 rounded-xl"
            />
            <div className="space-y-2">
              <div className="font-bold text-lg text-darkbrown">
                회사원을 위한 의자
              </div>
              <div className="text-md text-brown">
                8시간, 하루의 3분의 1이라는 긴 시간동안 내 몸을 맡기는 가구.
                지금의 선택이 당신의 건강을 좌우합니다. 이제 더이상 뻐근해하지
                마세요.
              </div>
              <div className="text-ivory2 text-sm">이화 신세계관</div>
            </div>
          </div>
          <div className="border border-ivory2 w-full"></div>
          <div className="flex space-x-3">
            <img
              src="https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMWMzOWE0OGMtODFiZC00MmRhLWI0MjUtODdmNmZlZmU1YTk2XzEuZmVmNTZmZGRlOGJmYjBlZGZlNjJmMGE4NTI1NGUxYzUuanBlZw.jpg"
              alt=""
              className="h-36 w-28 rounded-xl"
            />
            <div className="space-y-2">
              <div className="font-bold text-lg text-darkbrown">책상</div>
              <div className="text-md text-brown">
                정돈은 업무 효율을 위한 첫걸음입니다. EWHA Desks로 깔끔한 업무
                환경을 마련해보세요. 당신은 이제 고속승진이 가능할겁니다.
              </div>
              <div className="text-ivory2 text-sm">이화 ECC B3</div>
            </div>
          </div>
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
