//welcome type effect

const observer = new IntersectionObserver((entires) =>
{
    entires.forEach((entry) => 
    {
        console.log(entry);
        if (entry.isIntersecting)
            entry.target.classList.add('show');   
        else
            entry.target.classList.remove('show');
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const textBeforeStrong = "Hello World, I'm ";
    const strongText = "Israel Avendano Jr";
    const textAfterStrong = ".";
  
    const typingSpeed = 80;
    const element = document.querySelector(".typewriter");
    let indexBefore = 0;
    let indexStrong = 0;
    let indexAfter = 0;
  
    if (!element) {
      console.error("Element with class 'typewriter' not found");
      return;
    }
  
    const strongElement = document.createElement("strong");
  
    function type() {
        if (indexBefore < textBeforeStrong.length) 
        {
            element.textContent += textBeforeStrong.charAt(indexBefore);
            indexBefore++;
            setTimeout(type, typingSpeed);
        } 
        else if (indexStrong < strongText.length) 
        {
            strongElement.textContent += strongText.charAt(indexStrong);
            indexStrong++;
            if (!strongElement.parentNode)
                element.appendChild(strongElement); 
            setTimeout(type, typingSpeed);
        } 
        else if (indexAfter < textAfterStrong.length) 
        {
            element.appendChild(document.createTextNode(textAfterStrong.charAt(indexAfter)));
            indexAfter++;
            setTimeout(type, typingSpeed);
        }
    }
  
    type();
  });


// //dynamically load project pages

// function redirectToProject(projectId) {
//     window.location.href = `project-details.html?project=${projectId}`;
//   }
  
  document.addEventListener("DOMContentLoaded", () => {
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    const modalTitle = document.getElementById('projectModalLabel');
    const modalImg = document.getElementById('projectModalImg');
    const modalDesc = document.getElementById('projectModalDesc');
  
    // Add click listeners to project cards
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const title = card.getAttribute("data-title");
        const img = card.getAttribute("data-img");
        const desc = card.getAttribute("data-desc");
  
        modalTitle.textContent = title;
        modalImg.src = img;
        modalDesc.textContent = desc;
  
        modal.show();
      });
    });
  });
  