import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
        <div class="row">
          <!-- The header div -->
          <div class="wd-search-box px-3 mt-2">
            <div class="wd-search-inner bg-white">
              <span class="px-3 text-muted"><i class="fa fa-search"></i></span>
              <input type="text" placeholder="Search Tuiter" class="wd-form-control" />
            </div>
            <div class="wd-search-link">
              <a href="explore-settings.html" class="link-light-xs" title="Explore settings">
                <i class="fa fa-gear wd-fa-1_5"></i>
              </a>
            </div>
          </div>
        </div>
        <ul class="nav nav-tabs mb-2">
          <li class="nav-item">
            <a class="nav-link active" href="#">For You</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Entertainment</a>
          </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="image-label position-relative mb-2">
          <img src="../../images/starship-banner.png" class="position-relative img-fluid" />
          <div class="position-absolute wd-img-labels">
            <h4 class="text-white ">SpaceX's Starship</h4>
          </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;

