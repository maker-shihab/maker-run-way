document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");

  const topLevelIds = ["contentCollapse", "proceduresCollapse"];

  topLevelIds.forEach(topId => {
    const trigger = sidebar.querySelector(`a[href="#${topId}"]`);

    trigger.addEventListener("click", () => {
      // When this section is clicked, close all nested collapse items in the other top-level sections
      topLevelIds.forEach(otherId => {
        if (otherId !== topId) {
          const otherSection = document.getElementById(otherId);
          if (otherSection && otherSection.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(otherSection) || new bootstrap.Collapse(otherSection, { toggle: false });
            bsCollapse.hide();
          }

          // Also hide all nested collapse elements in the other section
          const nested = otherSection?.querySelectorAll(".collapse.show");
          nested?.forEach(item => {
            const nestedCollapse = bootstrap.Collapse.getInstance(item) || new bootstrap.Collapse(item, { toggle: false });
            nestedCollapse.hide();
          });
        }
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {

    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
      })
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }
        }
      });
    })
  }
});