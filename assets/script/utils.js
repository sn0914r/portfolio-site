/* =================================== 
PROJECT CARD HTML STRUCTURE
=================================== */
export function projectCardHTML(project) {
  const { title, category, description, image, link, links, githubLink, githubLinks, features, techStack } = project;

  const featuresHTML = features && features.length ? `
    <div class="row mt-1">
      ${features.map(f => `
        <div class="col-md-6 mb-1 d-flex align-items-center gap-2">
          <i class="bi bi-check-circle-fill" style="color: var(--text-primary); font-size: 0.85rem;"></i>
          <span style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.3;">${f}</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  const techStackHTML = techStack && techStack.length ? `
    <div class="d-flex flex-wrap gap-2 mt-2 pt-2" style="border-top: 1px solid var(--border);">
      ${techStack.map(tech => `
        <div class="d-flex align-items-center gap-2" style="background: var(--bg-main); padding: 6px 16px; border-radius: 8px;">
          <img src="${tech.icon}" alt="${tech.name}" style="width: 14px; height: 14px; object-fit: contain;">
          <span style="font-size: 0.75rem; color: var(--text-primary); font-weight: 500;">${tech.name}</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  return `
    <div class="card project-card w-100 border-0 overflow-hidden p-1 mb-4" style="background-color: var(--bg-surface); border-radius: 12px; box-shadow: var(--shadow-sm) !important;">
      <div class="row g-0 h-100">
        <!-- Image Section -->
        <div class="col-lg-5 p-3 d-flex align-items-center">
          <div class="project-img-box rounded-3 overflow-hidden position-relative w-100 border border-1" style="border-color: var(--border) !important;">
            <img src="${image}" alt="${title}" class="w-100" style="height: auto; display: block; opacity: 0.9;" />
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="col-lg-7 px-3 py-3 d-flex flex-column text-start">
          <div class="d-flex align-items-center gap-2 mb-2">
            <div style="width: 5px; height: 5px; border-radius: 50%; background-color: var(--text-primary);"></div>
            <span class="text-uppercase fw-bold" style="color: var(--text-primary); font-size: 0.65rem; letter-spacing: 1px;">${category || 'PROJECT'}</span>
          </div>
          
          <h3 class="mb-2" style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary);">${title}</h3>
          
          <p class="mb-3" style="color: var(--text-primary); opacity: 0.85; line-height: 1.6; font-size: 0.8rem;">
            ${description}
          </p>
          
          ${featuresHTML}
          
          <div class="mt-auto">
            ${techStackHTML}
            
            <div class="d-flex justify-content-end gap-3 mt-3">
              ${links ? `
              <div class="dropdown">
                <button class="btn btn-link text-decoration-none d-flex align-items-center gap-1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--text-secondary); transition: color 0.3s ease; padding: 0; box-shadow: none;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">
                  <span style="font-size: 0.8rem;">Live Demo</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow border-0" style="background-color: var(--bg-surface); min-width: 160px; outline: 1px solid var(--border);">
                  ${links.map(l => `
                  <li>
                    <a class="dropdown-item d-flex align-items-center justify-content-between gap-2 py-2" href="${l.url}" target="_blank" style="color: var(--text-primary); font-size: 0.85rem;" onmouseover="this.style.backgroundColor='var(--bg-main)'" onmouseout="this.style.backgroundColor='transparent'">
                      <span>${l.label}</span>
                      <i class="bi bi-box-arrow-up-right" style="font-size: 0.75rem; opacity: 0.7;"></i>
                    </a>
                  </li>
                  `).join('')}
                </ul>
              </div>
              ` : link ? `<a href="${link}" target="_blank" class="text-decoration-none d-flex align-items-center gap-1" style="color: var(--text-secondary); transition: color 0.3s ease;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">
                <span style="font-size: 0.8rem;">Live Demo</span>
                <i class="bi bi-box-arrow-up-right" style="font-size: 0.75rem;"></i>
              </a>` : ""}
              
              ${githubLinks ? `
              <div class="dropdown">
                <button class="btn btn-link text-decoration-none d-flex align-items-center gap-1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--text-secondary); transition: color 0.3s ease; padding: 0; box-shadow: none;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">
                  <span style="font-size: 0.8rem;">GitHub</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow border-0" style="background-color: var(--bg-surface); min-width: 160px; outline: 1px solid var(--border);">
                  ${githubLinks.map(l => `
                  <li>
                    <a class="dropdown-item d-flex align-items-center justify-content-between gap-2 py-2" href="${l.url}" target="_blank" style="color: var(--text-primary); font-size: 0.85rem;" onmouseover="this.style.backgroundColor='var(--bg-main)'" onmouseout="this.style.backgroundColor='transparent'">
                      <span>${l.label}</span>
                      <i class="bi bi-github" style="font-size: 0.75rem; opacity: 0.7;"></i>
                    </a>
                  </li>
                  `).join('')}
                </ul>
              </div>
              ` : githubLink ? `<a href="${githubLink}" target="_blank" class="text-decoration-none d-flex align-items-center gap-1" style="color: var(--text-secondary); transition: color 0.3s ease;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">
                <span style="font-size: 0.8rem;">GitHub</span>
                <i class="bi bi-github" style="font-size: 0.85rem;"></i>
              </a>` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* =================================== 
SKILL ICONS HTML STRUCTURE
=================================== */
export function skillsIconHTML(iconSrc, name) {
  return `<div class="skill-item">
      <div class="skill-tooltip">${name}</div>
      <div class="icon">
        <img
          src="${iconSrc}"
          alt="${name}"
          lazy="eager"
        />
      </div>
      <div class="skill-dot"></div>
    </div>`;
}
