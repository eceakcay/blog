# Vercel Deployment Kılavuzu

Bu kılavuz, portföy sitenizi `https://eceakcay.vercel.app/` domain'i altında deploy etmek için adımları içerir.

## Önkoşullar

- GitHub hesabınızda bu projenin bir repository'si olmalı
- Vercel hesabınız olmalı (ücretsiz hesap yeterli)

## Adım 1: Projeyi GitHub'a Push Edin

Eğer henüz yapmadıysanız, projeyi GitHub'a yükleyin:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio site"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
git push -u origin main
```

## Adım 2: Vercel'e Giriş Yapın

1. [Vercel](https://vercel.com) sitesine gidin
2. **Sign Up** veya **Log In** ile GitHub hesabınızla giriş yapın

## Adım 3: Yeni Proje Oluşturun

1. Vercel Dashboard'da **Add New...** > **Project** seçeneğine tıklayın
2. GitHub repository'nizi seçin veya import edin
3. Proje ayarlarını kontrol edin:
   - **Framework Preset:** Vite (otomatik algılanmalı)
   - **Root Directory:** `./` (proje kök dizini)
   - **Build Command:** `npm run build` (otomatik)
   - **Output Directory:** `dist` (otomatik)
   - **Install Command:** `npm install` (otomatik)

## Adım 4: Environment Variables (Gerekirse)

Eğer EmailJS veya başka servisler için environment variable'lar kullanıyorsanız:

1. **Environment Variables** sekmesine gidin
2. Gerekli değişkenleri ekleyin (örneğin EmailJS Public Key)

## Adım 5: Deploy Edin

1. **Deploy** butonuna tıklayın
2. Build işlemi tamamlanana kadar bekleyin (genellikle 1-2 dakika)
3. Deploy tamamlandığında siteniz `https://eceakcay.vercel.app/` adresinde yayında olacak

## Adım 6: Domain Ayarları (Opsiyonel)

Eğer özel bir domain kullanmak istiyorsanız:

1. Vercel Dashboard'da projenize gidin
2. **Settings** > **Domains** sekmesine gidin
3. Domain'inizi ekleyin ve DNS ayarlarını yapın

## Otomatik Deploy

Vercel, GitHub repository'nize her push yaptığınızda otomatik olarak yeni bir deploy başlatır. Bu özellik varsayılan olarak aktiftir.

## Sorun Giderme

### Build Hatası

- **"Command not found"**: `package.json` dosyasında build script'inin doğru olduğundan emin olun
- **"Module not found"**: Tüm bağımlılıkların `package.json`'da tanımlı olduğundan emin olun

### Routing Sorunları

- HashRouter kullanıldığı için routing sorunları olmamalı
- Eğer sorun yaşarsanız, `vercel.json` dosyasındaki rewrite kurallarını kontrol edin

### 404 Hatası

- `vercel.json` dosyasının proje kök dizininde olduğundan emin olun
- Rewrite kurallarının doğru olduğundan emin olun

## Önemli Notlar

- `vercel.json` dosyası proje kök dizininde olmalı
- Build output'u `dist` klasörüne yazılmalı (Vite varsayılanı)
- Her deploy'da yeni bir URL oluşturulur, ancak production domain sabit kalır

## İletişim

Sorularınız için: eceakcay.36@gmail.com

