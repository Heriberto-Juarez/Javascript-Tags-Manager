class TagsManager {
    constructor(s) {
        let that = this;
        this.container = null;
        this.tags = [];
        this.html = {};
        this.extraTagClass = '';
        this.removable = true;
        $.each(s, function (k, v) {
            that[k] = v;
        })
    }

    exists(tag) {
        let e = false;
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i] === tag) {
                e = true;
                break;
            }
        }
        return e;
    }

    add(tag) {
        console.log("Add");
        if (this.container !== null) {
            if (!this.exists(tag) && tag.length>0) {
                const el = $("<div class='tag " + this.extraTagClass + "'>" + tag + " </div>");
                if (this.removable) {
                    let close_icon = $('<span>&times;</span>');
                    el.append(close_icon);
                    close_icon.on("click", () => {
                        this.remove(tag);
                    });
                }
                this.container.append(el);
                this.tags.push(tag);
                this.html[tag] = el;
            }
        }
    }

    remove(tag) {
        let that = this;
        if (this.container !== null) {
            if (this.exists(tag)) {
                $(this.html[tag]).remove();
                this.tags = this.tags.filter((e) => {
                    return e !== tag;
                });
            }
        }
    }
    wipeTags(){
        if(this.container !== null)
            $.each(this.tags, (k,v) => this.remove(v));
    }
}
