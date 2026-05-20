// Add copy functionality to code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codePreviews = document.querySelectorAll('.code-preview');
    codePreviews.forEach(preview => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.style.cssText = `
            position: absolute; top: 10px; right: 10px;
            padding: 5px 10px; background: rgba(102, 126, 234, 0.8);
            color: white; border: none; border-radius: 5px;
            cursor: pointer; font-size: 12px; opacity: 0; transition: opacity 0.3s;
        `;
        preview.style.position = 'relative';
        preview.appendChild(copyBtn);
        
        preview.addEventListener('mouseenter', () => { copyBtn.style.opacity = '1'; });
        preview.addEventListener('mouseleave', () => { copyBtn.style.opacity = '0'; });
        
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const text = preview.querySelector('pre').innerText;
            navigator.clipboard.writeText(text);
            copyBtn.textContent = 'Copied!';
            setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
        });
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === '1') { e.preventDefault(); switchTab('html'); }
    if ((e.ctrlKey || e.metaKey) && e.key === '2') { e.preventDefault(); switchTab('css'); }
    if (e.key === 'Escape') {
        document.querySelectorAll('.example-output.show').forEach(ex => ex.classList.remove('show'));
    }
});