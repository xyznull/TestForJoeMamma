
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.54d7c3dfcdca6de329a8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.baseline.en.70722fe0e0ebe2db3cd4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4708.baseline.en.46544a91b1d55d5f9af3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.baseline.en.4a76a447edee315e82bd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.9a82a036df4258686127.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.baseline.en.7ec3164fc01d10bbabc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5019.baseline.en.723e311f4a05eaa581cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7617.baseline.en.7d06e83ab45cb8ff3699.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.baseline.en.4108502d9f2c1ca7f6c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.baseline.en.44a434a7ccdea4d9e968.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.baseline.en.7d2f9cadca1e4ab83a5a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.baseline.en.4eb9e61fc6ba940f4a33.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.baseline.en.d331c9523269335e12ad.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.baseline.en.e64333d27b4d929d4c01.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.5dae7bbdc62fd20ac1bf.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.baseline.en.5c2e43b6efa1c24a1276.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.44428467e736b1c925f1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.b43fa0e7db0766e44946.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/chivo/chivo_n4.bf4dc1c0e4649d2f5a28281870307415c2a9c652.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=5fecaac3c6e5264ce009de22a39cad38640d7263e67743d2277b2672b56d28c3","https://fonts.shopifycdn.com/chivo/chivo_n7.d83b4aaa520af8b24ea0f1eb81a6d2d8b1a2ad49.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=276d7f4af1b7fb69ef267e0a2f66f14ddb5729397bfc46dbc723af276d3aa093","https://fonts.shopifycdn.com/bauer_bodoni/bauerbodoni_n4.8461148e5de43869667fbe64194eb80450bb3636.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=f3a2a71de46c95c349b9cc1b1e85bbea4e1341e6d4308c6eb98894d2c4095ff4","https://fonts.shopifycdn.com/bauer_bodoni/bauerbodoni_n7.6ba4277576da62f25b86b1485f3bf74f24b35351.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=5c627d8922a7717777ac20eb7e7cc95f1729a00b9dba33eadc0b58a6a8d12004"];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  