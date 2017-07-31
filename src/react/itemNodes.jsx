const React = require("react");

class ItemNodes extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    var nodes = this.props.data.map(function(items, idx) {
      var url = items.link;
      var rssSite = items.link.substr(items.link.indexOf('u=') + 2);
      var domain = rssSite.split('/')[2];
      var favicon_url = "http://www.google.com/s2/favicons?domain=" + domain;
      var date = new Date(items.created).toString();
      date = date.substr(0, date.indexOf('GMT'));
      var openBrowser = function() {
        //メインプロセスへ送信する
        require("electron").ipcRenderer.send('openBrowser', url);
      };
      return (
        <article className='panel' key={idx}>
          <header className='head'>
            <img className='site_icon' src={favicon_url}/>
            <div className='site_info'>
              {domain}
            </div>
            <div className='date'>
              {date}
            </div>
          </header>
          <main className='main'>
            <a href="javascript:void(0)" onClick={openBrowser} target="_brank">{items.title}</a>
          </main>
        </article>
      )
    });
    return (
      <main className='body-content'>
        {nodes}
      </main>
    );
  }
}

module.exports = ItemNodes
