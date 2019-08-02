/*
MIT License
Copyright (c) 2019 Heriberto Juárez Jaimes
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
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

    exists(tagname) {
        let e = false;
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i].name === tagname) {
                e = true;
                break;
            }
        }
        return e;
    }

    /*
    * @args tagname string The text of the tag
    * @args related_data object A key value object that contains information related to the tag
    * */
    add(tagname, related_data) {
        related_data = related_data || {};

        if (this.container !== null) {
            if (!this.exists(tagname)) {
                const el = $("<div class='tag " + this.extraTagClass + "'>" + tagname + " </div>");
                if (this.removable) {
                    let close_icon = $(' <span>&times;</span>');
                    el.append(close_icon);
                    close_icon.on("click", () => {
                        this.remove(tagname);
                    });
                }
                this.container.append(el);
                let tag_data = {name: tagname};
                $.each(related_data, (k, v) => tag_data[k] = v);
                this.tags.push(tag_data);
                this.html[tagname] = el;
            }
        }
    }

    remove(tagname) {
        let that = this;
        if (this.container !== null) {
            if (this.exists(tagname)) {
                $(this.html[tagname]).remove();
                this.tags = this.tags.filter((e) => e.name !== tagname);
            }
        }
    }

    wipeTags() {
        if (this.container !== null) $.each(this.tags, (k, v) => this.remove(v.name));
    }

    getRelatedData(key) {
        let related = []; key = key || '';
        this.tags.forEach((k, v) => {
            if(key === ''){
                delete k["name"];
                related.push(k);
            }else related.push(k[key]);
        });
        return related;
    }
}
