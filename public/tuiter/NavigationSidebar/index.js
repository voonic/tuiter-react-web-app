const NavigationSidebar = (activeMenu) => {
  return (`
    <!-- Render the menu bar-->
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-t"></i>
      </a>
      <a href="/tuiter/HomeScreen/index.html" class="list-group-item list-group-item-action ${activeMenu == 'home' ? 'active' : ''}">
        <i class="fa fa-home"></i> <span class="d-none d-xl-inline"> Home</span>
      </a>
      <a href="/tuiter/explore/index.html" class="list-group-item list-group-item-action ${activeMenu == 'explore' ? 'active' : ''}">
        <i class="fa fa-hashtag"></i> <span class="d-none d-xl-inline"> Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${activeMenu == 'notifications' ? 'active' : ''}">
        <i class="fa fa-bell"></i> <span class="d-none d-xl-inline"> Notifications</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${activeMenu == 'messages' ? 'active' : ''}">
        <i class="fa fa-envelope"></i> <span class="d-none d-xl-inline"> Messages</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${activeMenu == 'bookmarks' ? 'active' : ''}">
        <i class="fa fa-bookmark"></i> <span class="d-none d-xl-inline"> Bookmarks</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${activeMenu == 'lists' ? 'active' : ''}">
        <i class="fa fa-list"></i> <span class="d-none d-xl-inline"> Lists</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${activeMenu == 'profile' ? 'active' : ''}">
        <i class="fa fa-user"></i> <span class="d-none d-xl-inline"> Profile</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${activeMenu == 'more' ? 'active' : ''}">
        <i class="fa fa-ellipsis-h"></i> <span class="d-none d-xl-inline"> More</span>
      </a>
    </div>
    <!-- Render the tweet button -->
    <div class="d-grid mt-2">
      <button class="btn btn-primary rounded-pill" type="button">Tweet</button>
    </div>
  `);
}
export default NavigationSidebar;

