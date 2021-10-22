import { Component, State, h } from '@stencil/core';
import { Art } from '../../utils/art';

@Component({
  tag: 'art-list',
  styleUrl: 'art-list.css',
})
export class ArtList {

  @State() artList: Array<Art>;
  @State() pattern: string;

  doFilter(evt: Event) {
      this.pattern = (evt.target as HTMLInputElement).value;
  } 

  async componentWillLoad() {
    try {
        const response = await fetch('/data/street-art.json');
        this.artList = await response.json();
    }
    catch (err) {
        console.log('fetch failed', err);
    }
  }

  _currentArtList() {
    return this.artList
      .filter( (art: Art) => {
        return art.location 
            && art.location.match(new RegExp(this.pattern, 'i'));
        })
      .length;
  }

  render() {
    return <div class="container">
      <div class="row">          
        <div class="col-md-3">
          <div class="form-group">
            <label htmlFor="search">
              Search
            </label>
            <input 
              type="text" 
              class="form-control" 
              id="search"
              onInput={(evt) => this.doFilter(evt)}  
              placeholder="Enter search"></input>
          </div>
          <div>Current search: {this.pattern}</div>
        </div>
        <div class="col-md-9">
          <ul class="artList container">
            {this.artList
              .filter( (art: Art) => {
                return art.location 
                    && art.location.match(new RegExp(this.pattern, 'i'));
                })
                .map((art: Art) => {
                  return <li>
                    <art-list-item
                      img={art.img}
                      location={art.location}
                      coordinates={art.coordinates}
                      link={art.link}
                      city={art.city}
                      postalcode={art.postalcode}
                      country={art.country}>
                    </art-list-item>
                  </li>;
                })
              }
          </ul>
        </div>
        <div>Current number of street art sites: {this._currentArtList()}</div>
      </div>
    </div>
  }
}