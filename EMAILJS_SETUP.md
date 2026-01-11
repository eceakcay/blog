# EmailJS Kurulum Kılavuzu

Bu kılavuz, iletişim formunun e-posta gönderme özelliğini aktif etmek için EmailJS kurulumunu açıklar.

## Adım 1: EmailJS Paketini Yükleyin

Terminalde proje klasöründe şu komutu çalıştırın:

```bash
npm install @emailjs/browser
```

veya

```bash
pnpm add @emailjs/browser
```

## Adım 2: EmailJS Hesabı Oluşturun

1. [EmailJS](https://www.emailjs.com/) sitesine gidin ve ücretsiz hesap oluşturun
2. Dashboard'a giriş yapın

## Adım 3: Email Servisi Yapılandırın

1. EmailJS Dashboard'da **Email Services** sekmesine gidin
2. **Add New Service** butonuna tıklayın
3. E-posta sağlayıcınızı seçin (Gmail, Outlook, vb.)
4. Servisi bağlayın ve **Service ID**'yi not edin

## Adım 4: Email Şablonu Oluşturun

1. **Email Templates** sekmesine gidin
2. **Create New Template** butonuna tıklayın
3. Şablonu aşağıdaki gibi yapılandırın:

**Subject (Konu):**
```
Portfolio İletişim Formu: {{from_name}}
```

**Content (İçerik):**
```
Yeni bir mesaj aldınız!

Gönderen: {{from_name}}
E-posta: {{from_email}}

Mesaj:
{{message}}

---
Bu mesaj portfolio sitenizden gönderilmiştir.
```

4. **Template ID**'yi not edin

## Adım 5: Public Key'i Alın

1. **Account** > **General** sekmesine gidin
2. **Public Key**'i kopyalayın

## Adım 6: Kodu Güncelleyin

`src/pages/Index.tsx` dosyasını açın ve şu değişiklikleri yapın:

1. **Import satırının yorumunu kaldırın:**
```typescript
import emailjs from '@emailjs/browser';
```

2. **handleSubmit fonksiyonundaki EmailJS kodunun yorumunu kaldırın** ve şu değerleri güncelleyin:
   - `YOUR_SERVICE_ID` → EmailJS Service ID'niz
   - `YOUR_TEMPLATE_ID` → EmailJS Template ID'niz  
   - `YOUR_PUBLIC_KEY` → EmailJS Public Key'iniz

3. **Simüle edilmiş API çağrısını kaldırın** (setTimeout satırı)

Örnek güncellenmiş kod:
```typescript
await emailjs.send(
  'service_xxxxx',      // EmailJS Service ID
  'template_xxxxx',     // EmailJS Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'eceakcay.36@gmail.com',
  },
  'your-public-key'     // EmailJS Public Key
);
```

## Adım 7: Test Edin

1. Uygulamayı çalıştırın: `npm run dev`
2. İletişim formunu doldurun ve gönderin
3. E-posta kutunuzu kontrol edin

## Notlar

- EmailJS ücretsiz planında ayda 200 e-posta gönderebilirsiniz
- E-postalar doğrudan belirttiğiniz e-posta adresine (eceakcay.36@gmail.com) gönderilecektir
- Form validasyonu ve hata yönetimi zaten kodda mevcuttur

## Sorun Giderme

- **"emailjs is not defined" hatası:** Import satırının yorumunu kaldırdığınızdan emin olun
- **E-posta gelmiyor:** EmailJS Dashboard'da servis ve şablon ayarlarını kontrol edin
- **CORS hatası:** Public Key'in doğru olduğundan emin olun

