---
title: "mtr을 따라 알아보는 VPN에 대한 재밌는사실 : VPN 간 통신은 홉이 없는것처럼 보임 ㄷㄷ"
date: 2025-04-09T08:33:00.000Z
draft: false
tags: ["AWS", "Infra"]
series: ["Infra & Network"]
description: "AWS에서 VPN을 구축하며 mtr을 사용해 VPC 간 통신을 분석한 결과, IPSec으로 암호화된 홉은 보이지 않았고, 외부 네트워크로 나갈 때는 많은 홉이 나타났다. Tailscale VPN을 통해 내부 네트워크에서는 매우 빠른 속도를 보여주었고, 외부 네트워크에서는 평균 속도가 87로 나타났다. 이는 VPN 사용 시에도 같은 네트워크 내에서는 낮은 레이턴시를 유지한다는 것을 보여준다."
notion_id: "1d01bab9-e3f8-804f-835c-e5b3f0c6d9e4"
notion_url: "https://www.notion.so/mtr-VPN-VPN-1d01bab9e3f8804f835ce5b3f0c6d9e4"
---

# mtr을 따라 알아보는 VPN에 대한 재밌는사실 : VPN 간 통신은 홉이 없는것처럼 보임 ㄷㄷ

> **Summary**
> AWS에서 VPN을 구축하며 mtr을 사용해 VPC 간 통신을 분석한 결과, IPSec으로 암호화된 홉은 보이지 않았고, 외부 네트워크로 나갈 때는 많은 홉이 나타났다. Tailscale VPN을 통해 내부 네트워크에서는 매우 빠른 속도를 보여주었고, 외부 네트워크에서는 평균 속도가 87로 나타났다. 이는 VPN 사용 시에도 같은 네트워크 내에서는 낮은 레이턴시를 유지한다는 것을 보여준다.

---

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/d1094172-5c2d-4aa5-b895-879351a4e26f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPOMLIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDyNc7UR10dQpCH1nVD1uZBWWB7zWe9LdRs2kAYv6ioAQIgKrbWBPFLLUkeQAhRKEZxsjXwHACeyHey3mnq%2FWpbFIYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNrso%2Fz8wpbyrvjrhCrcA0p4buJMCQ8kh%2FiUPmgxY6M04cyuo%2B529UdhcVJ83pFipbDsouD0J3bLWg%2BjL4AkJp9ddSDHX5koroU9hxMqCheykH8LTcAg%2FbAIqh53Fko8i%2FuRxWT3IyrHBW09%2B3ZnHSdDQN3d5bceq3fw4QfVTo0MMuNxCGSrRM3aRAsvjBRhmgap2K1BL6LcoRpCu78gP209G0BtW2XVMsaXJCFaXPmO58OlgXxLeuXyoNsezXGO24tVpbQ%2FYrRHSkMwnHts3uxxA6eKGwkfHH8wwaaBBnQyb3GrJUhjp8pJ9HXcCuCO3goUCEHcq6JzhJFosTEW2sF9zX%2Bz%2BJeV%2FOL4k4ckLLKojx4BVJVKG%2FIJTs2sgr9T3U3vyyAzPdcAc7SD1e5bjVvNVIGxaOoqLxKGxyLW9t43HGUp5rcsCdG5nmDaamLyaQEEaJAthPFA1YU2NMclPi8yztnpTw5MQSLRz1DJSo2GcVg4zJWAsd3K1reDVhGSSeT9PSdUtb%2FIvUfCb9x53wsLA1mx1WA38Ps%2Fyz1qzYgG%2FHamJgGc5zzHRY10DK36253AENxtGNM4oUgLAsyuV1Wr2ItmE%2FxymGjo7ENiufSyCxx3HnD8oQ8WC69U4xPNXIEvPOjvMH2jxByaMIjPh8QGOqUBhrlHXlFIsWNR7Y7tTgOSWtP1EHD4MQIQjIyWMZVRRd81I2EW13lAUcDFEYbD2dwiobWS2hIzNt6R9BjS75QNiO2XoTiMo7jTrrzm5bKzhEkUdZUYSr6k3J%2BlwJyMWUt5suL%2FzJlzQoxH%2F2BbajBved3F3T9QmXAb6GAartLP%2BqueyUdLugrNA2K0WStHs4mbqK7WzRTqWONoW5TF%2BPgQQ5BWlhRO&X-Amz-Signature=9eb66ffda10bf64376c1c0b0c907cf2c7c5624f4801ad70d7635a0ba1af4a45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

AWS에서 VPN을 구축해보면서, mtr로 다른 VPC로 ping 홉 따라가보니 인스턴스 사이에 홉이 안보였음

근데 또 8.8.8.8로 찍으면, 뭔가 홉이 많이 나옴…

엥? 같은 계정 , 같은 리전이라, VPC끼리 1:1 로 뭔가 내부적으로 연결되어있나?

라고 생각했지만~~?

아님… IPSec으로 암호화된 친구들은 사이에 홉들이 암호화되어 안보이는것임…

그러면 홉 사이사이 어케 분석함?

→ 못함… 근데 지연시간으로 어느정도의 거리를 유추해낼 수 있진 않을까?


그래서, tailscale로 묶여있는 우리집 네트워크로도 분석해봄… VPN으로 묶여있더라도, 내부, 외부 속도가 얼마나 차이날까?

### 8.8.8.8 외부 네트워크로 나가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/f5826c8d-63d3-4caf-ae72-08454314ed11/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPOMLIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDyNc7UR10dQpCH1nVD1uZBWWB7zWe9LdRs2kAYv6ioAQIgKrbWBPFLLUkeQAhRKEZxsjXwHACeyHey3mnq%2FWpbFIYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNrso%2Fz8wpbyrvjrhCrcA0p4buJMCQ8kh%2FiUPmgxY6M04cyuo%2B529UdhcVJ83pFipbDsouD0J3bLWg%2BjL4AkJp9ddSDHX5koroU9hxMqCheykH8LTcAg%2FbAIqh53Fko8i%2FuRxWT3IyrHBW09%2B3ZnHSdDQN3d5bceq3fw4QfVTo0MMuNxCGSrRM3aRAsvjBRhmgap2K1BL6LcoRpCu78gP209G0BtW2XVMsaXJCFaXPmO58OlgXxLeuXyoNsezXGO24tVpbQ%2FYrRHSkMwnHts3uxxA6eKGwkfHH8wwaaBBnQyb3GrJUhjp8pJ9HXcCuCO3goUCEHcq6JzhJFosTEW2sF9zX%2Bz%2BJeV%2FOL4k4ckLLKojx4BVJVKG%2FIJTs2sgr9T3U3vyyAzPdcAc7SD1e5bjVvNVIGxaOoqLxKGxyLW9t43HGUp5rcsCdG5nmDaamLyaQEEaJAthPFA1YU2NMclPi8yztnpTw5MQSLRz1DJSo2GcVg4zJWAsd3K1reDVhGSSeT9PSdUtb%2FIvUfCb9x53wsLA1mx1WA38Ps%2Fyz1qzYgG%2FHamJgGc5zzHRY10DK36253AENxtGNM4oUgLAsyuV1Wr2ItmE%2FxymGjo7ENiufSyCxx3HnD8oQ8WC69U4xPNXIEvPOjvMH2jxByaMIjPh8QGOqUBhrlHXlFIsWNR7Y7tTgOSWtP1EHD4MQIQjIyWMZVRRd81I2EW13lAUcDFEYbD2dwiobWS2hIzNt6R9BjS75QNiO2XoTiMo7jTrrzm5bKzhEkUdZUYSr6k3J%2BlwJyMWUt5suL%2FzJlzQoxH%2F2BbajBved3F3T9QmXAb6GAartLP%2BqueyUdLugrNA2K0WStHs4mbqK7WzRTqWONoW5TF%2BPgQQ5BWlhRO&X-Amz-Signature=b8ef4ee5c8dcaf8cda9935e978fe01899008d0adb8cc6570f39788905eba3c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (외부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/4f45636b-b3ad-4308-948b-55da8c952d7d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPOMLIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDyNc7UR10dQpCH1nVD1uZBWWB7zWe9LdRs2kAYv6ioAQIgKrbWBPFLLUkeQAhRKEZxsjXwHACeyHey3mnq%2FWpbFIYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNrso%2Fz8wpbyrvjrhCrcA0p4buJMCQ8kh%2FiUPmgxY6M04cyuo%2B529UdhcVJ83pFipbDsouD0J3bLWg%2BjL4AkJp9ddSDHX5koroU9hxMqCheykH8LTcAg%2FbAIqh53Fko8i%2FuRxWT3IyrHBW09%2B3ZnHSdDQN3d5bceq3fw4QfVTo0MMuNxCGSrRM3aRAsvjBRhmgap2K1BL6LcoRpCu78gP209G0BtW2XVMsaXJCFaXPmO58OlgXxLeuXyoNsezXGO24tVpbQ%2FYrRHSkMwnHts3uxxA6eKGwkfHH8wwaaBBnQyb3GrJUhjp8pJ9HXcCuCO3goUCEHcq6JzhJFosTEW2sF9zX%2Bz%2BJeV%2FOL4k4ckLLKojx4BVJVKG%2FIJTs2sgr9T3U3vyyAzPdcAc7SD1e5bjVvNVIGxaOoqLxKGxyLW9t43HGUp5rcsCdG5nmDaamLyaQEEaJAthPFA1YU2NMclPi8yztnpTw5MQSLRz1DJSo2GcVg4zJWAsd3K1reDVhGSSeT9PSdUtb%2FIvUfCb9x53wsLA1mx1WA38Ps%2Fyz1qzYgG%2FHamJgGc5zzHRY10DK36253AENxtGNM4oUgLAsyuV1Wr2ItmE%2FxymGjo7ENiufSyCxx3HnD8oQ8WC69U4xPNXIEvPOjvMH2jxByaMIjPh8QGOqUBhrlHXlFIsWNR7Y7tTgOSWtP1EHD4MQIQjIyWMZVRRd81I2EW13lAUcDFEYbD2dwiobWS2hIzNt6R9BjS75QNiO2XoTiMo7jTrrzm5bKzhEkUdZUYSr6k3J%2BlwJyMWUt5suL%2FzJlzQoxH%2F2BbajBved3F3T9QmXAb6GAartLP%2BqueyUdLugrNA2K0WStHs4mbqK7WzRTqWONoW5TF%2BPgQQ5BWlhRO&X-Amz-Signature=b01ee083fa455ae2e359ef6c3a709ddb8898a5450c8f073dfb7c620b1cd2def0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Tailscale VPN (내부) 네트워크로 가보자~

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/09ccd4d5-876c-4bba-bbdf-cc77a0a11257/c3070734-535e-464b-ad44-07917023ccdd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPOMLIO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T083334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDyNc7UR10dQpCH1nVD1uZBWWB7zWe9LdRs2kAYv6ioAQIgKrbWBPFLLUkeQAhRKEZxsjXwHACeyHey3mnq%2FWpbFIYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNrso%2Fz8wpbyrvjrhCrcA0p4buJMCQ8kh%2FiUPmgxY6M04cyuo%2B529UdhcVJ83pFipbDsouD0J3bLWg%2BjL4AkJp9ddSDHX5koroU9hxMqCheykH8LTcAg%2FbAIqh53Fko8i%2FuRxWT3IyrHBW09%2B3ZnHSdDQN3d5bceq3fw4QfVTo0MMuNxCGSrRM3aRAsvjBRhmgap2K1BL6LcoRpCu78gP209G0BtW2XVMsaXJCFaXPmO58OlgXxLeuXyoNsezXGO24tVpbQ%2FYrRHSkMwnHts3uxxA6eKGwkfHH8wwaaBBnQyb3GrJUhjp8pJ9HXcCuCO3goUCEHcq6JzhJFosTEW2sF9zX%2Bz%2BJeV%2FOL4k4ckLLKojx4BVJVKG%2FIJTs2sgr9T3U3vyyAzPdcAc7SD1e5bjVvNVIGxaOoqLxKGxyLW9t43HGUp5rcsCdG5nmDaamLyaQEEaJAthPFA1YU2NMclPi8yztnpTw5MQSLRz1DJSo2GcVg4zJWAsd3K1reDVhGSSeT9PSdUtb%2FIvUfCb9x53wsLA1mx1WA38Ps%2Fyz1qzYgG%2FHamJgGc5zzHRY10DK36253AENxtGNM4oUgLAsyuV1Wr2ItmE%2FxymGjo7ENiufSyCxx3HnD8oQ8WC69U4xPNXIEvPOjvMH2jxByaMIjPh8QGOqUBhrlHXlFIsWNR7Y7tTgOSWtP1EHD4MQIQjIyWMZVRRd81I2EW13lAUcDFEYbD2dwiobWS2hIzNt6R9BjS75QNiO2XoTiMo7jTrrzm5bKzhEkUdZUYSr6k3J%2BlwJyMWUt5suL%2FzJlzQoxH%2F2BbajBved3F3T9QmXAb6GAartLP%2BqueyUdLugrNA2K0WStHs4mbqK7WzRTqWONoW5TF%2BPgQQ5BWlhRO&X-Amz-Signature=8c5d3765de688145380637c3d6052e03753fd48633ebeeb6dd8b0993f2f2abef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

