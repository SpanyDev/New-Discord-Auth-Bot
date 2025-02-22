# Discord AuthBot

Discord kullanıcılarını botunuzun üzerinde yetkilendirerek onların istediğiniz sunucuya giriş yapmalarını sağlayın.

## Özellikler
- Kullanıcıları OAuth2 ile doğrulama
- Belirtilen sunucuya giriş izni verme
- Kullanıcı bilgilerini MongoDB'de saklama
- Webhook ile loglama
- Yetkilendirme iptal edilirse otomatik rol kaldırma

## .ENV Yapılandırması

`.env` dosyanız aşağıdaki gibi olmalıdır:

```
PORT=80
TOKEN=""
CLIENT_ID=""
CLIENT_SECRET=""
REDIRECT_URI="domain/callback"
WEBHOOK_URL=""
MONGODB_URI=""
VERIFY_ROLE_ID=""
GUILD_ID=""
OWNER_IDS=[]
```

## Katkıda Bulunma
Katkıda bulunmak için pull request açabilirsiniz. Her türlü öneriye açığız!

## Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.
