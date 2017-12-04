import { Injectable } from '@angular/core';
import { cocktailSpirit } from './../models/cocktail-spirit.model';

@Injectable() 
export class CocktailSpiritRepository {

    private cocktailSpirits: cocktailSpirit[] = [

        new cocktailSpirit('Finlandia Vodka', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAACenp7l5eXx8fGhoaHMzMyqqqrIyMinp6fg4OC1tbX7+/vw8PD19fXBwcHV1dWWlpaxsbG+vr58fHxDQ0OPj49lZWXq6uqNjY0iIiLS0tLb29tqamqFhYVeXl6AgIBWVlZMTEwvLy8UFBQ+Pj5zc3M2NjY/Pz9ISEgNDQ0mJiYbGxvCBWtcAAAU8klEQVR4nO1dCXeqPLcmUAsIgohVVJyntvb//75LSHYGyEB7+r3YddnrrB5NQtxPhj1lwHEGGmiggQYaaKCBBhpooIEGGmiggQYaaKCBno3K2eK2XN5W/rRvTv4nlC6RQMeob35+m1zUokXcN1O/SHkbHya/b75+jZZqgAh9JH2z9itUfOoAVlT2zd0vkGfAV9Gmb/7+mSZmgAiN++bwX+nLhhD98bmoFTKc3vrm8Z8otQP840qjC0CE/rDq97shXPTN58/JpAlF6pvPH9NrR4Doz5rht64Ij31z+lPqCvDPDtOiO8I/6hJ3UoaE/qhKHHVHuOqb15/RqjvCW9+8/ox23RHu++b1Z9QV4dxb/lF1seiIMEZjt5q1o775/T6FHREWd4Ttn0f1SPm3/OGgI8JzfDk5JxyyCf6YEW4NYAC9xW+10j8gtHx2T+qA+6DYTci3rq4F+sRd6KOz6+56Zb8DhSh1nDt6rT7mdZ9QisxzshKla4TyvrnvRAfklbV2O1XSYwMI8pWfIzSOZxqElfc0Rlklbm5/ILjoInSqZCJC67TumJqyEZp8beaouKCryqXCD24/wjNCbt/8d6AIrcZbdAsPG/yZ0svpHpfoMUaLSR61AGb4uRxdXDftm/tOVBncbxADhU78iq+n83lyL1O0Hyu7sGqN/lj+Lh0rXuPRAX9kM/ErPqOk2LxXo/dFBLffPOhS4uK+yP5KcNhD4Qp6Zg5Q7jG6fyG33PhMTZ52aFHMnYA8tV5F2aRHrr9Fa7TMwoJ8PgOeVY7eXxYVRNZ/SeCEzuWVWN3lV48Mf5suGf+cMEAvKHzxsuv0CAnFfbIsj3T6nf+GkKGEVlnAvrBB6RJfY7OHhFGGgsuIOL/ZqS9mv0HB1CHrndOLGwquUEIH6spFUeElQhw8ObubpF6YeX5BunEmZRRtid21bQZ4ifWW70MnuoiC9DNZbsduVqbL9bMb3M5iswhKNK8/F7w/MN9p6AQl1ot4Rm4lZYiNtdWj+jA7BZqKn4aSdQWLLsp/cpkx93I/2F2r9Pyy8+dxkWQcHxnIkR+UnpOEvbD9HZpVCInZfJzz1HT3qExUMmgTJKr6W90M5chNXr3qw+QPSNLoETj3okjvczH1Uik7OmgfM6dIR6v5fOfmXp0ye+BQd1pPwdl/y+2PKFm8V7PtcduJQqNAhbOvdf/bvPWEK5gweJhOw5k/831/NouiPM/TNM0DXCQfvf6Pee9K0SLKJ04qBZNe7ofX9+nU/8za5cdimrcYKRYv4k2EbbnxM4RvikoF1sqiuQRR4s0K83s9RxPfF3s4D8OusbXeJdFiV4mKuAaXy6rNC6Npual6YRTOolnlc8he/MbtELsIR2Hf4zTeCbu3Kjc9zv2ootnMr1hLa0xYlLzgD2FDuXv27nkGMZQJo61chDPi6GX1klKJIcVEHUR51ETovFr3tj3D2luShQo+Q0/4XP+NXhQPW8P5z4CwojJs9Y4z54DG0Wvoz1KsDXw/xP9C/Cl/qURwZtH3vYsZRm7TR4/TEbPCS89RUBy41Yj2zN34PAgdRSww7qSug6KR4JUl7/8nWpXyVU5QYI3yTufCGvBkOpt/IXS+ok9wOLzniYYnyq0/1ihv7tzJEL7TqFVeBpEb5hGoifR5thSpwGxuNsMlj8PaasURnK9l+Drz08TZVOJnlFEJPQlD332KWOO06clObwi9GTuxGthBfKyKJDXKMspIz03mWE1sXJ9NUYVp2wOx8RSnr0GUXdExC3MFa3zCVr3knSsPK52N88itfJGU5j2oIgywWokqMV08x3Qc07lDFmAux1mFYNwWp2xi1Vx/xuOMzETkMd2w90Q1kbpjtb3w31NUD9QQoc/j6nYgc0d2fopwe0V07Pl1AZdZ1ssVs2CiuZOKCjbwn2ScBtvqTzZKXrzcj2mHFoIs3Jxw5x73NbQdmaIcSfbOEE6QN5GmdRHGzzBOE3y8YOFNNtPtiFuUI8xqUnfUFV2zlb9HCCeN0L0GwTo5ROyZFG1i2ZwrR0+wdpOgzClIIMNDDOEMoSXW+3hSestZlOBg/3FW8b9Hs7CyEwoQtyHagAn/eIubh78WaPmfoDBQiao+AD2NZuDZEUW+DWfLCgnZjDBGyItR5IwqQGHkFAsiRXb1+QsvC6MTctt+4RFlfq8LVHi/JR9It6VD5w1anJxFnT7JnJj0V9UYtwdCKRaQk8XEITv2ccx/vV7grTV71Yg8rSWf7L+mir2lINCzdUJNUrQsga+XEXRs1YtOBi0yi2D33jgdHebBZq8RKtk86G+NY4SQNK5CdKu4j93QR3OXIS93SyJZS8/fbR/genhrxLRmjlA79siovyWOUfOsXdVB21GGu0baYpHxvZbb44zbrCfom9mTHtqLEGo4eZP59nRGH9Pxdo1mQt4nosLiMY/ER45kNbhAu6eM8VcA1UJui9bJGIlexys61P9/riL5kY9azLpOv+JSQ7tipvaRTgjbOGEh+unburfPt6gpLev1qNmm7+CoitylKtbmYPFKhp57FhJjnDhGQUsdTPDmIU1NPZNWvu3BWpamVo5SpywV+mAUPcMKxXdossmbMaaajsjZJKowqP/6jHPQQN5KPaditH9dqCau7/zRoxctcqNIObKL/dPvWehG8UFzhiTu3z36HQpXf2Cr7EADDTTQQP8/KXUbhEMokFgb0FIOpqj+hoPvG8hR2JXFFEjQgpMMKoPYPUnA8dNcYCKXK4QsIfy9YbXbov7tEy0Ov/jhE5dg23vhjgCy7Rd7gIHwTJOELZeCydJKfLCa5RPEJ9E6gKwHT7qzkraVyg1qksPvRahjK/xU6JY8Qk6H4PaEq4QeqpqP7DmBWb6ZljYXuekFe4fNU+Bb/hRkLdtJ9uPEyqMepfiwK2U50HPYDYKtlcr92vxcl+AxvTcBkJMLhaqtz8weh6wDryjmxSwIWzc6PQTYB5lT2hmkhyPhZ5RnltmpC5GxY7O5yAh5EZpVgAhPQZbgZE2bFWmpdQfCWYBd1yjsQie/QFq0dtZpunJhgc+Ud57IJzVtLjKpE0c1mthAhSwhFiDID0sA5FsI199BKNSpRLgSEMZqhCiQEQqylB9ztF2SIiBcr78oOzqEJDjaDaE46Piig4DwISDU9CG6yAiFPrw2m8qKECJE41BAeMApoj7xOcJIQKiah+JjPPwkICTNRe5geBFguPjwBpSJJIQCFqEey7l+QCiFxQDhrslqXRmXNKY+FIaRMLpEhHVzEUkj9iEOn7JjRXcJIe9DSSz9ACEkrpoI68qItrCN0rvwFO9jEWHdXHMlQi7APTVCiSlzpA5OKMmL51qEuCHSTgjFp3gr75upGoTscVeNUBwhyHwy5ZsI8QJY3gWhrN2Y3SYhxM110yCEk8O1MQGzhiMUR4jFbvsmQtzuUQvhtl0vkcBwlwuz2ySEuLm29SdRWxCE7PZTESGfzwSw/ue7Ily0EZYdEZI+AK7ZLiAJIeZ+qUHItFipQkgsmg3tyfWvInQhwYKwPu68hwLMOpYRlpDQRsgmYqRCSARRAobh9xFCogLhFQagGWFMOaLHEJmFKSN0RYQAgyIElS76MAwhGSHMGDHeqQXuQVeElVAIWwjbDgzRmSkTGJAuX4t5BVNcgXAr1A1ZTKTUFsGemd/GkwuAUApHSwjJtGMXekSdEBKXq2B6DazjpVxZokcIbulRgZAYBBnzbQ5dEO4XI98PF3sJYcYRMl9oSz3u1IiQDD7u2YF1TBCySyQi56RDCG7pXYEwAA7oVbDG21D5sWtEmVIj5DfrdEIIzQ/VwwUtBCFz0LfOB/vVBkKYY18KhOTIZsGH8jcQXnQIp0xGTEM7QiKMF7wERAEIQm7wOG86hOwmjXaWc4QMOJ1q2jHVFeGGCZysA0Ju9hzlVqYIIRWV2j5k/axAWH85CoVMGzS7Inxlx13vfgthazPTirUsCAxPQsiayz39ACH5unAajuy/IuRXQRChE5gQ8rEHWFIJIbuR4Hr8AcK2UWVyERsIP/UI2Ynsix0h4R5/2ohVMYTccv7SIRQN00YWcSzqHQFrXsiG8Lqdr1ar21mPsBELMyEseSrTRjLCxmsTFAhB0pzbWXcOCiwI5eYPGaFS40sIG3evmhASWUTCpCIIjrARlFEgBG1xbGfVn4n3D+6FYVMcIFRabTJCyes0IiQandgxH7TMRELYuPRMgTAT6pazNsJvwlg2bOg32qUyQvkOZBNCwv5nuzxHKN8gqUAIRpTbylJdkWq4R/MbCOVhakAoXZkElMkI5eZSIDzRr2krS3mp/b8gnDGEW7FKA0LlTbt7GWE7jqOabIgoUjlLVbshGmX0DxsIpSvJDAjVN3zWWXv2cdvMk2EU2iz1Xcz6aJTRx28gjFtVqhGekIomMkLpNTQ4QfbxwVLYtxCq31+jFzXfQSixbkCoZIE8wBFKzdVGCD8VthCqb7nVixoAY0MIR7eUCGXLu71MxivjCKXmaiFki35FK0tYsRDpewiluIjP88UpoEbosQdQ/FJTfKSF9g2E4opPCwZoUTmq7/LfjJK69oTJBq1VY0S44B1H8h8yQrZCSiK+47C+0ozoe+Z3M0MBfzlyhGJz4e/Q9XhcMjE0ayGksRnYp8qMI61V01x7khCuOEJSgSAlRYScMA/EMmf9ykzQQkbInRUZ4XW/lzPk9UOq72EFnHkO2p3UAEZaZoQa5xwhPfLSAWHCuamJyT7ciGTy0Rs01AhFopFkyDo4TN8zXqGo9u63Uq6LELg8S85IKNdHOrWtmly2BSVqVlbHaohbUDSbC39VvBgDgtmQdWMc8NjTQ6xDRRBhkjoZjJIP/IUYiLRL+PaDVNnsLhvJzFlhzXBn/E2bzYW/ta84ZeEXyDqy2ngM+giFdcv5INEkgc+0Aq/iJjeIuM7WQHiSuROGcgyg6KQ/iDmKN+2xDfGQ9cXGPL9cmbW57iIN0J93MZE9FbOWvjqNds+VTLmsBN+MxTIDmOBus7nwxGzdxMs7hWUxfvmCGpvNOp3PXBxxu7zAExNFNJ/JOSzH28o3Y5F2Xh8P8MDgeGv+zsRpWkLXUMXPK4QteC5Xq5oN/2OPUqJKrH45UeQDTV4aNImdIgiCnN9uIVNB6lKeliomAmmYnDhV7WlV+1MeIhpooIF+lYJsZ7vI6hco+aUT6t6svkeOicoSfzXuUAEVejCfx/LOb0Cnlf3dTjUbkeAAHNhCjIbC1YKQ5W4Qr6Fgav4NKx3Cxk7L+0Ql/Xa3yXdSjO3MKZDeSqHEzbxOVTObprZn9KtVsqFmvHakYQxYeoQUgu7wZLVu+QHLcF5ys4J91T4ybbBt6sVHo6x5MJEydMN0Io8r4yO2hmYuJXg7J1O3N9fEja9MvTfLGhn5FLl464KQ+26Wc8S0W8AfwYaf1psEqzTbgLdvWLlrW62mk5TE4CQSmja6BSGfMLZ3Y9FiwjedoAFPFLs14BjoxW4boengwJ3XBnF4y8xtxAgMRIYEnXuJMFY0XNAGoEpDfxiAnjyIvDHzfgzLfO8cIY1D2W6/PHYbHA57GZwQ1tLcJgfxCPINPFvtZQjvPB8gGt4K9MEQEifyYj3BLgwOy/HbVBxCgaHTtzKb1EXX3nEkIGysk6qI9Aieh8su3SIHiSwzlgb2ySYF7FC+awrS6kB3Ty1ciwjBDtI3NhFiEbBjv5FeXL+wnQyixeq4Ax6yB3UxkF3N53RK4E1ACK2h14kMYT1pOrzVui5HXf67pSwdfSn8kGarHx2VPMxFdYfuaiARoX1bCGHCpyU73NFWK25YD7aUpdGTWm9ekDYud26OeRqIUp5ccxoITzZWiDBy6UixcIypLjehcSbLTZtToX0N1SORY0ytYSuThBAmolZC3mgrb7uMOgckLtictrtOOac4xqvRcBDqL1opmgaUEEIIVutGkQjmjvDS4RWltWfxAePIdnUItT488pxmXoERw1OUO1U4SQihv7WOM0E4J2aTTpo3y++AK8vJIBhCORFQGlsC1p2FJJqikUwSQrAWtIYKkWPbHWtsC53J4CzaXKkoYl190g8kKrYuQhKtXWM/fogIx+aygPBIxb/1Ss8Y5get12APYqJ+/omU1wQnFJITGdmREBbmss3l+YuuGNAGeo4KaVvYCLoat7TufAZFKGabG1xCCP6C1pVrbECwBT3qEYVF7qFbpx9pV+O5ppNjilF66Y4QpFJXhLbLsWotgWUiXbew3QBK/dkACyjdTNFLGo3dq0SoFesNhLZhWhfCYkt2eLREZflojfTekEK/0xSNiSUhlLZZqai5TcZspZBpvREqtvgiVA6cTUVBGnJBBP2iEb5KSaPVFgzhp6Upaso5KiT+jJ6ExtMVAY+XNy5g1rSJhBAWxLUyjyGktZoPpNWOBdmyTZ0025sGjgygfsp+NXkED01TXkIIIR6tjIQlbx9YNg7T2pp4y3GUnKoL8yFEcaOM/kDmrVkgM9ct2TQgp7TThZ+0izoMU9Qi28sieWRO71zTX+ahO9rxupNjEkI4Taqtfc4rI59M912o9t5YbrXj12PoA0AgWFiC5QmVf6ifAzdeOf1oMMTEPXFAtsvgWEFDmaPIMnM2PnTFVT6+Xh4QH7+2CV9tZeXtt5RsawCwGdAUPqaSBYwem/MpIoRZoDfGSG1EgpKyhliN6vXmNp8ShHWX+U2kBahabWkx1vZhK0wHCEFIh6n2fiTlK+ptoqZxPklNVNYQ4UnjUPrI9JUjBL1iiAi/CQhTS9UkfxcnmGJYTLFYNRDuM/tZQjCKqgpdGIoXngqhTYNjexcQUpmmddyJboPpAZrUYtWAxWIuBSJ3Hx7pJ4Nebq2uGWMNnwJCWHrUKQAy5kF4QkTRdiWWnQdMTTFtEmBr1CSTmYJEhFQ56oSYPNxghNjW2EinWK+7lc9SGIu3ABpmYQMhjcxprCWq7+Er28BqYZ0YHfZYs7hf32ztNgEaI/UTCaHZ4vXlTGatWMJXfpdCmMaw8nk1Rxqat4iZX1FNJR1xF1jkUt3gRN/DflC+gdXyysQCb2jp9lrFcrH/2C9skZTGnl/Leud4kWGi0iIpx5hKtWRvthj8hE2I/DbVr2yiFP3mbsl4fpjfbks+q8e0PYYtmQMNNNBAAw000EADDTTQQAMNNNBAAw000Lfp/wCbZgLtxM8SpQAAAABJRU5ErkJggg=='),


    ];

    public getAll(): cocktailSpirit[] {

        return this.cocktailSpirits;
    }
}