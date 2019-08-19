import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServiceMoviesProvider{
    http:any;
    baseUrl: String;

constructor(http:Http){
    this.http = http;
    this.baseUrl = 'https://api.themoviedb.org/3/';
}
getNowplaying(){
    return this.http.get(this.baseUrl+'movie/now_playing?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&page=1&region=US')
    .map(res => res.json());
}
getUpComing(){
     return this.http.get(this.baseUrl+'movie/upcoming?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&page=1&region=US')
    .map(res => res.json());
}
get_topRated(){
    return this.http.get(this.baseUrl+'movie/top_rated?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&page=1&region=US')
   .map(res => res.json());
}
get_Popular(){
    return this.http.get(this.baseUrl+'movie/popular?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&page=1&region=US')
   .map(res => res.json());
}
getAiringToday(){
     return this.http.get(this.baseUrl+'tv/airing_today?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}
getPopularShows(){
     return this.http.get(this.baseUrl+'tv/popular?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}
getTopRatedShows(){
     return this.http.get(this.baseUrl+'tv/top_rated?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}

getMovieDetails(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}

getMovieGallery(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'/images?api_key=eae90947bbbca251321d2af835d7a123')
    .map(res => res.json());
}
getMovieVideo(id){
     return this.http.get(this.baseUrl+'movie/'+id+'/videos?api_key=eae90947bbbca251321d2af835d7a123')
    .map(res => res.json());
}
getMovieSimilar(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'/similar?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}
getTvDetails(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}

getTvGallery(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'/images?api_key=eae90947bbbca251321d2af835d7a123')
    .map(res => res.json());
}
getTvSimilar(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'/similar?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&page=1')
    .map(res => res.json());
}

getActorMovieDetails(id){
     return this.http.get(this.baseUrl+'person/'+ id +'/movie_credits?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}
getActorGallery(id){
     return this.http.get(this.baseUrl+'person/'+ id +'/images?api_key=eae90947bbbca251321d2af835d7a123')
    .map(res => res.json());
}
getActorTvDetails(id){
     return this.http.get(this.baseUrl+'person/'+ id +'/tv_credits?api_key=eae90947bbbca251321d2af835d7a123&language=en-US')
    .map(res => res.json());
}
getSearch(SearchQ){
     return this.http.get(this.baseUrl+'search/movie?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&query='+SearchQ)
    .map(res => res.json());
}
getSearchTv(SearchQ){
     return this.http.get(this.baseUrl+'search/tv?api_key=eae90947bbbca251321d2af835d7a123&language=en-US&query='+SearchQ+'&page=1')
    .map(res => res.json());
}

}