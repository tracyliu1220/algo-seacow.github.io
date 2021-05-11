url = 'https://people.cs.nctu.edu.tw/~tzuli110/AlgoSeacow/'
// url = ''

nav = '<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white font-weight-600"> \
      <div class="container-fluid"> \
        <a class="navbar-brand" href="' + url + '#"><span class="font-color-blue">Algo</span>Seacow</a> \
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> \
          <span class="navbar-toggler-icon"></span> \
        </button> \
      </div> \
      <div class="container-fluid" style="justify-content: flex-end;"> \
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> \
          <div class="navbar-nav"> \
            <a class="nav-link active" aria-current="page" href="' + url + '#">Home</a> \
            <a class="nav-link" href="' + url + '#about">About</a> \
            <a class="nav-link" href="' + url + '#courses">Courses</a> \
            <a class="nav-link" href="' + url + '#members">Members</a> \
          </div> \
        </div> \
      </div> \
    </nav>'

document.write(nav)