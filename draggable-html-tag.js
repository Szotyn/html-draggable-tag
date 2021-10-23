class draggable extends HTMLElement {
    
    connectedCallback() {
    this.attributes.isDown = false;
    this.attributes.deltaX;
    this.attributes.deltaY;
    this.style.display = "block";
    this.style.position = "absolute";
    this.style.marginLeft = this.style.marginLeft || 0+"px"
    this.style.marginTop = this.style.marginTop || 0+"px"


    this.addEventListener("mousedown", (e) => {
        if(this.getAttribute("movable")=="true")
        {
        this.attributes.isDown = true;
          this.attributes.deltaX = parseInt(this.style.marginLeft) - e.clientX
          this.attributes.deltaY = parseInt(this.style.marginTop) - e.clientY
        }

    });

    this.addEventListener("mousemove", (e) => {
        if(this.attributes.isDown === true)
        {
            this.style.marginLeft = /*parseInt(this.style.marginLeft)*/ this.attributes.deltaX + e.clientX +"px";
            this.style.marginTop = /*parseInt(this.style.marginTop)*/this.attributes.deltaY + e.clientY  + "px";
        }
        //console.log(e.movementX+" ,"+e.movementY)
        //console.log(this.style.marginLeft+" ,"+this.style.marginTop)
    });


    this.addEventListener("mouseup", () => {
        this.attributes.isDown = false;
    });
    
    this.addEventListener("mouseleave", () => {
        this.attributes.isDown = false;
    });
    this.addEventListener("mouseout", () => {
        this.attributes.isDown = false;
    });

  }
}
customElements.define("x-draggable", draggable);

