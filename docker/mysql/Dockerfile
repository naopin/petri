FROM --platform=linux/x86_64 mysql:8.0
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

ENV MYSQL_DATABASE=laravel_local \
  MYSQL_USER=root \
  MYSQL_PASSWORD=root \
  MYSQL_ROOT_PASSWORD=root \
  TZ=Asia/Tokyo \
    # locale
  LANG=ja_JP.UTF-8 \
  LANGUAGE=ja_JP:en \
  LC_ALL=ja_JP.UTF-8

COPY ./my.cnf /etc/mysql/conf.d/my.cnf
RUN chmod 644 /etc/mysql/conf.d/my.cnf